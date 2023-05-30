import EmptyStringValidator from './EmptyStringValidator';
import EmailValidator from './EmailValidator';

export default class ValidatorBuilder {
  #value;

  #validators = [];

  #message = '';

  constructor(value) {
    this.#value = value;
  }

  validEmptyString() {
    this.#validators.push(new EmptyStringValidator(this.#value));
    return this;
  }

  validEmail() {
    this.#validators.push(new EmailValidator(this.#value));
    return this;
  }

  validate() {
    for (const validator of this.#validators) {
      if (!validator.validate()) {
        this.#message = validator.getErrorMessage();
        return false;
      }
    }

    return true;
  }

  get message() {
    return this.#message;
  }
}
