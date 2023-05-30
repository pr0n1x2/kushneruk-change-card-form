export default class DateConverter {
  #locale = 'uk-UA';

  #options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  setLocale(locale) {
    this.#locale = locale;
  }

  setOptions(options) {
    this.#options = options;
  }

  convertToLocalString(date) {
    const dateToConvert = date instanceof Date ? date : new Date(date);
    return dateToConvert.toLocaleDateString(this.#locale, this.#options);
  }
}
