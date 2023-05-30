import Value from './Value';

export default class EmptyStringValidator extends Value {
  constructor(value) {
    super(value);
  }

  validate() {
    return typeof this.value === 'string' && this.value.trim().length;
  }

  // eslint-disable-next-line class-methods-use-this
  getErrorMessage() {
    return "Це поля є обов'язковим";
  }
}
