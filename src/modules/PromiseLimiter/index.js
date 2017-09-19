import FastPriorityQueue from 'fastpriorityqueue';

/**
 * @param capacity
 * @returns {semaphore}
 */
export default function(capacity) {
  let running = 0;

  const pendingComparator = function(a, b) {
    return a.priority > b.priority;
  };
  let pending = new FastPriorityQueue(pendingComparator);

  function remove() {
    running--;

    if (running < capacity) {
      dequeue();
    }
  }

  function dequeue() {
    const job = pending.poll();

    if (job) {
      run(job.fn).then(job.resolve).catch(job.reject);
    }
  }

  function queue(fn, priority) {
    return new Promise(function(resolve, reject) {
      pending.add({
        fn,
        priority,
        resolve,
        reject,
      });
    });
  }

  function run(fn) {
    running++;
    try {
      return Promise.resolve(fn()).then(function(result) {
        remove();
        return result;
      }, function(error) {
        remove();
        throw error;
      });
    } catch (err) {
      remove();
      return Promise.reject(err);
    }
  }

  /**
   * @name semaphore
   * @param {function} fn
   * @param {number} priority
   * @return {Promise.<*>}
   */
  const semaphore = function(fn, priority) {
    if (running >= capacity) {
      return queue(fn, priority || 50);
    } else {
      return run(fn);
    }
  };

  semaphore.getPendingCount = function() {
    return pending.size;
  };

  semaphore.getRunningCount = function() {
    return running;
  };

  return semaphore;
}