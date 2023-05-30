import Value from './Value';

export default class EmailValidator extends Value {
  constructor(value) {
    super(value);
  }

  validate() {
    const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, 'gm');
    return emailRegex.test(this.value.trim());
  }

  // eslint-disable-next-line class-methods-use-this
  getErrorMessage() {
    return 'Ви ввели невалідний Email';
  }
}
