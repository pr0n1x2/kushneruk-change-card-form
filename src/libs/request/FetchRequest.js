export default class FetchRequest {
  #method = 'post';

  #url;

  constructor(url) {
    this.#url = url;
  }

  setMethod(method) {
    this.#method = method;
  }

  sendRequest(data) {
    return new Promise((resolve, reject) => {
      const options = {
        method: this.#method,
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-cache',
      };

      fetch(this.#url, options)
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  }
}
