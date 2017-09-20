export default class ExtendableError {
  constructor(message = '') {
    Error.call(this, message);

    // extending Error is weird and does not propagate `message`
    Object.defineProperty(this, 'message', {
      enumerable: false,
      value: message,
      writable: true,
    });

    Object.defineProperty(this, 'name', {
      enumerable: false,
      value: this.constructor.name,
      writable: true,
    });

    if (Error.hasOwnProperty('captureStackTrace')) {
      Error.captureStackTrace(self, this.constructor);
      return;
    }

    Object.defineProperty(this, 'stack', {
      enumerable: false,
      value: (new Error(message)).stack,
      writable: true,
    });
  }
}

ExtendableError.prototype = Object.create(Error.prototype);