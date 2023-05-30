import Button from './Button';

export default class ButtonManager {
  #container;

  #stage1Button;

  #stage2Button;

  constructor(container) {
    const stage1ButtonContainer = container.querySelector('.submit__stage1');
    const stage2ButtonContainer = container.querySelector('.submit__stage2');
    this.#container = container;
    this.#stage1Button = new Button(stage1ButtonContainer);
    this.#stage2Button = new Button(stage2ButtonContainer);
    this.#stage2Button.hideButton();
  }

  disableButtons() {
    this.#stage1Button.disableButton();
    this.#stage2Button.disableButton();
  }

  enableButtons() {
    this.#stage1Button.enableButton();
    this.#stage2Button.enableButton();
  }

  switchButtons() {
    if (this.#stage1Button.isDisplayed()) {
      this.#stage1Button.hideButton();
      this.#stage2Button.showButton();
    } else {
      this.#stage1Button.showButton();
      this.#stage2Button.hideButton();
    }
  }

  hideButtons() {
    this.#container.classList.add('disabled');
  }
}
