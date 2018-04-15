/**
 * @flow
 */



/**
 * @callback DbPersistCallback
 * @param {DbSaveQueueMap} persist
 */

/**
 * @callback DbRetrieveCallback
 * @param {DbLoadQueueMap} retrieve
 */

/**
 * @param {DbPersistCallback} persistCallback
 * @param {DbRetrieveCallback} retrieveCallback
 * @param {number} saveDelay
 * @param {number} loadDelay
 * @param {number} saveQueueSize
 * @param {number} loadQueueSize
 * @return {{save: QueueDbSave, load: QueueDbLoad}}
 */
export default function(persistCallback,
  retrieveCallback,
  saveDelay = 500,
  loadDelay = 500,
  saveQueueSize = 100,
  loadQueueSize = 100) {
  /**
   * @typedef {Map.<string,{doc:object,deleted:bool}>} DbSaveQueueMap
   * @type {DbSaveQueueMap}
   */
  let saveQueue = new Map();
  let saveQueueTimer = null;

  /**
   * @typedef {Map.<string,{promise:Promise,resolve:function,reject:function}>} DbLoadQueueMap
   * @type {DbLoadQueueMap}
   */
  let loadQueue = new Map();
  let loadQueueTimer = null;

  const persistSaveQueue = async () => {
    saveQueueTimer = null;
    const persist = saveQueue;
    saveQueue = new Map();

    persistCallback(persist);
  };

  const retrieveLoadQueue = async () => {
    loadQueueTimer = null;
    const retrieve = loadQueue;
    loadQueue = new Map();


    for (const [id, dataInRetrieve] of retrieve) {
      if (saveQueue.has(id)) {
        const dataInSaveQueue = saveQueue.get(id);
        if (!dataInSaveQueue.deleted) {
          dataInRetrieve.resolve(dataInSaveQueue.doc);
        } else {
          dataInRetrieve.reject();
        }
        retrieve.delete(id);
      }
    }

    if (retrieve.size) {
      retrieveCallback(retrieve);
    }

  };

  const persistQueue = (id, doc, deleted) => {
    saveQueue.set(id, {
      doc,
      deleted,
    });

    if (saveQueueSize <= saveQueue.size) {
      clearTimeout(saveQueueTimer);
      persistSaveQueue();
    } else if (saveQueueTimer === null) {
      saveQueueTimer = setTimeout(persistSaveQueue, saveDelay);
    }
  };

  return {
    /**
     * @function QueueDbSave
     * @param {string} id
     * @param {object} doc
     */
    save: (id, doc) => {
      persistQueue(id, doc, false);
    },

    /**
     * @function QueueDbRemove
     * @param {string} id
     */
    remove: (id) => {
      persistQueue(id, {}, true);
    },


    /**
     * @function QueueDbLoad
     * @param {string} id
     * @return {Promise}
     */
    load: (id) => {
      if (loadQueue.has(id)) {
        const dataInLoadQueue = loadQueue.get(id);
        return dataInLoadQueue.promise;
      }

      const data = {};
      data.promise = new Promise((resolve, reject) => {
        data.resolve = resolve;
        data.reject = reject;
      });

      loadQueue.set(id, data);

      if (loadQueueSize <= loadQueue.size) {
        clearTimeout(loadQueueTimer);
        retrieveLoadQueue();
      } else if (loadQueueTimer === null) {
        loadQueueTimer = setTimeout(retrieveLoadQueue, loadDelay);
      }

      return data.promise;
    },
  };
}