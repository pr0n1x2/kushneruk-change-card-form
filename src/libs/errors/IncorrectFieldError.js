export default class IncorrectFieldError extends Error {
  constructor(message, field) {
    super(message);
    this.field = field;
    this.name = 'IncorrectFieldError';
  }
}
