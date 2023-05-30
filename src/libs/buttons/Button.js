export default class Button {
  #container;

  constructor(container) {
    this.#container = container;
  }

  showButton() {
    this.#container.classList.remove('disabled');
  }

  hideButton() {
    this.#container.classList.add('disabled');
  }

  isDisplayed() {
    return !this.#container.classList.contains('disabled');
  }

  disableButton() {
    this.#container.setAttribute('disabled', 'disabled');
  }

  enableButton() {
    this.#container.removeAttribute('disabled');
  }
}
