export default class Field {
  #fieldName;

  #input;

  #container;

  #error;

  constructor(container) {
    this.#container = container;
    this.#input = this.#container.querySelector('input');
    this.#error = this.#container.querySelector('span');
    this.#fieldName = this.#input.getAttribute('name');
  }

  get name() {
    return this.#fieldName;
  }

  get value() {
    return this.#input.value;
  }

  showError(message) {
    this.#container.classList.add('error');
    this.#error.innerText = message;
  }

  hideError() {
    this.#container.classList.remove('error');
    this.#error.innerText = '';
  }
}
