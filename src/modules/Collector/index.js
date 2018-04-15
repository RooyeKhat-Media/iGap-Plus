/**
 * @flow
 */


/**
 *
 * @param {function} collectorCallback
 * @param {number} collectorDelay
 * @param {number} collectQueueSize
 * @param {boolean} arrayStorage
 * @return {{collect: (function(*, (string|number)))}}
 */
export default function(collectorCallback, collectorDelay = 500, collectQueueSize = 100, arrayStorage = false) {

  let collectorStorage = arrayStorage ? [] : new Map();
  let collectQueueTimer = null;

  const flush = () => {
    collectQueueTimer = null;
    const collected = collectorStorage;
    collectorStorage = arrayStorage ? [] : new Map();
    collectorCallback(collected);
  };


  return {
    /**
     * Collect data
     * @param {*} data
     * @param {string|number} id Omitted for array storage
     */
    collect: (data, id) => {
      if (arrayStorage) {
        collectorStorage.push(data);
      } else {
        collectorStorage.set(id, data);
      }

      const capacity = arrayStorage ? collectorStorage.length : collectorStorage.size;

      if (collectQueueSize <= capacity) {
        clearTimeout(collectQueueTimer);
        flush();
      } else if (collectQueueTimer === null) {
        collectQueueTimer = setTimeout(flush, collectorDelay);
      }
    },
  };
}