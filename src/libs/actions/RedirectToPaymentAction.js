import FormAction from './FormAction';

export default class RedirectToPaymentAction extends FormAction {
  constructor(form) {
    super(form);
  }

  execute() {
    return new Promise(() => {
      const { url } = this.form.data;

      try {
        window.location.href = url;
      } catch (e) {
        throw new Error(e);
      }
    });
  }
}
