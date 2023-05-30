import GetUserDataAction from './GetUserDataAction';
import RedirectToPaymentAction from './RedirectToPaymentAction';

export default class FormActionFactory {
  static getStageAction(form) {
    switch (form.currentStage) {
      case 1: return new GetUserDataAction(form);
      case 2: return new RedirectToPaymentAction(form);
      default: return null;
    }
  }
}
