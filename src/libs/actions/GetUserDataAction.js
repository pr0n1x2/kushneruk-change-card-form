import FieldValidatorFactory from '../validators/FieldValidatorFactory';
import IncorrectFieldError from '../errors/IncorrectFieldError';
import FormAction from './FormAction';

export default class GetUserDataAction extends FormAction {
  constructor(form) {
    super(form);
  }

  #getData() {
    const fields = this.form.getFields();

    return new Promise((resolve) => {
      const data = {};

      for (const field of fields) {
        const validator = FieldValidatorFactory.getValidator(field);

        if (!validator.validate()) {
          throw new IncorrectFieldError(validator.message, field.name);
        }

        Object.assign(data, { [field.name]: field.value });
      }

      resolve(data);
    });
  }

  execute() {
    return new Promise((resolve) => {
      Promise.resolve(this.#getData())
        .then((data) => this.fetch.sendRequest(data))
        .then((response) => {
          const message = 'За введеною вами email адресою не вдалося знайти передплату, спробуйте ще раз.';
          return this.checkResponseStatus(response, message);
        })
        .then(({ name, date, url }) => {
          resolve([this.form.getUserDataSuccess, name, date, url]);
        })
        .catch((error) => {
          if (error instanceof IncorrectFieldError) {
            resolve([this.form.showErrorOnField, error.field, error.message]);
          } else {
            resolve([this.form.showMessage, error.message, true]);
          }
        });
    });
  }
}
