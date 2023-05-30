export default class Value {
  #value;

  constructor(value) {
    this.#value = value;
  }

  get value() {
    return this.#value;
  }
}
