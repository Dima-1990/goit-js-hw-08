
import throttle from 'lodash.throttle';

const myFormEl = document.querySelector('.feedback-form');
const formFirstLabel = myFormEl.firstElementChild;
const formSecondLabel = formFirstLabel.nextElementSibling;
const btnSubmitEl = myFormEl.lastElementChild;

let enteredValues = {};

defoltValueInput();

myFormEl.addEventListener(
  'input',
  throttle(e => {
    if (e.target.type === formFirstLabel.lastElementChild.name) {
      enteredValues.email = e.target.value;
    } else {
      enteredValues.message = e.target.value;
    }

    pushLocalStorage(enteredValues);
  }, 500)
);

function pushLocalStorage(object) {
  localStorage.setItem('feedback-form-state', JSON.stringify(object));
}

function defoltValueInput() {
  try {
    let infoFromLocal = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (infoFromLocal !== null) {
      formFirstLabel.lastElementChild.value = infoFromLocal.email;
      formSecondLabel.lastElementChild.value = infoFromLocal.message;
    }
  } catch (error) {
    console.log('помилка поля вводу');
  }
}

btnSubmitEl.addEventListener('click', e => {
  e.preventDefault();
  let resultValue = {
    email: formFirstLabel.lastElementChild.value,
    message: formSecondLabel.lastElementChild.value,
  };

  if (
    formFirstLabel.lastElementChild.value === '' ||
    formSecondLabel.lastElementChild.value === ''
  ) {
    alert('Не всі поля заповнені');
    return;
  }

  console.log(resultValue);

  myFormEl.reset();
  localStorage.clear();
});


























































































