import '@babel/polyfill';
import './styles/main.scss';
import ChangeCardForm from './libs/ChangeCardForm';

window.addEventListener('DOMContentLoaded', () => {
  const run = () => {
    new ChangeCardForm('.kushneruk');
  };

  run();
});
