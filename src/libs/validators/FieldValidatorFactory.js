import ValidatorBuilder from './ValidatorBuilder';

export default class FieldValidatorFactory {
  static getValidator(field) {
    switch (field.name) {
      case 'email': {
        return new ValidatorBuilder(field.value).validEmptyString().validEmail();
      }
      default: {
        return new ValidatorBuilder();
      }
    }
  }
}
