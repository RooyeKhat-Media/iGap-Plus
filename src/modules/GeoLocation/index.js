export default class GeoLocation {

  static getCurrentPosition(options) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(position);
        },
        (error) => {
          reject(error);
        },
        options
      );
    });
  }

  static watchPosition(options) {
    return new Promise((resolve, reject) => {
      const id = navigator.geolocation.watchPosition(
        (position) => {
          resolve({
            id,
            position,
          });
        },
        (error) => {
          reject(error);
        },
        options
      );
    });
  }

  static clearWatch(id) {
    navigator.geolocation.clearWatch(id);
  }
}