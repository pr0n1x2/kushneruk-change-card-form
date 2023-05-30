import FetchRequest from '../request/FetchRequest';

export default class FormAction {
  constructor(form) {
    this.form = form;
    this.fetch = new FetchRequest(this.form.url);
  }

  // eslint-disable-next-line class-methods-use-this
  checkResponseStatus(response, errorText) {
    return new Promise((resolve, reject) => {
      const { status } = response;

      if (status === 200) {
        resolve(response.json());
      } else {
        reject(new Error(errorText));
      }
    });
  }
}
