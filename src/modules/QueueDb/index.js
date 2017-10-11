/**
 * @flow
 */

import 'es6-map/implement';

/**
 * @param storage
 * @param {number} saveDelay
 * @param {number} loadDelay
 * @param {number} saveQueueSize
 * @param {number} loadQueueSize
 * @return {{save: QueueDbSave, load: QueueDbLoad}}
 */
export default function(storage,
  saveDelay = 5000,
  loadDelay = 1000,
  saveQueueSize = 100,
  loadQueueSize = 100) {
  /**
   * @type {Map.<string,{doc:object,transform:null|function,deleted:bool}>}
   */
  let saveQueue = new Map();
  let saveQueueTimer = null;

  /**
   * @type {Map.<string,{promise:Promise,resolve:function,reject:function}>}
   */
  let loadQueue = new Map();
  let loadQueueTimer = null;

  const persistSaveQueue = async () => {
    saveQueueTimer = null;
    const persist = saveQueue;
    saveQueue = new Map();

    const allDocs = await storage.allDocs({
      keys: [...persist.keys()],
    });

    let bulkDocs = [];

    allDocs.rows.forEach(function(element) {
      const dataInPersist = persist.get(element.key);
      let doc = {
        _id: element.key,
        ...(
          dataInPersist.deleted ?
            {_deleted: true} :
            (dataInPersist.transform ? dataInPersist.transform(dataInPersist.doc) : dataInPersist.doc)
        ),
      };

      if (element.value && element.value.rev) {
        doc._rev = element.value.rev;
      }
      bulkDocs.push(doc);
    });

    await storage.bulkDocs(bulkDocs);
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
      const allDocs = await storage.allDocs({
        keys: [...retrieve.keys()],
        include_docs: true,
      });

      allDocs.rows.forEach(function(element) {
        const dataInRetrieve = retrieve.get(element.key);
        if (element.doc) {
          dataInRetrieve.resolve(element.doc);
        } else {
          dataInRetrieve.reject();
        }
      });
    }

  };

  const persistQueue = (id, doc, transform, deleted) => {
    saveQueue.set(id, {
      doc,
      transform,
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
     * @param {null|function} transform
     */
    save: (id, doc, transform = null) => {
      persistQueue(id, doc, transform, false);
    },

    /**
     * @function QueueDbRemove
     * @param {string} id
     */
    remove: (id) => {
      persistQueue(id, {}, null, true);
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