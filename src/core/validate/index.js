import { validate } from './validate.js';

const startValidate = () => {
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.addEventListener('invalid', (e) => {
      e.preventDefault();
      validate(input);
    });
    input.addEventListener('input', () => {
      validate(input, false);
    });
    input.addEventListener('blur', () => {
      validate(input);
    });
  });
}
export default startValidate;
