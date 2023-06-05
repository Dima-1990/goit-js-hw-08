import throttle from 'lodash.throttle';

const myFormEl = document.querySelector('.feedback-form');
const formFirstLabel = myFormEl.firstElementChild;
const formSecondLabel = formFirstLabel.nextElementSibling;
const btnSubmitEl = myFormEl.lastElementChild;

let enteredValues = {};



myFormEl.addEventListener(
  'input',
  throttle(e => {
    if (e.target === formFirstLabel.lastElementChild) {
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

      enteredValues.email = infoFromLocal.email;
      enteredValues.message = infoFromLocal.message;
    } else {
      enteredValues.email = formFirstLabel.lastElementChild.value;
      enteredValues.message = formSecondLabel.lastElementChild.value;
    }
  } catch (error) {
    console.log('помилка поля вводу', error);
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
    !formFirstLabel.lastElementChild.value.includes('@')
  ) {
    alert('Поле Email порожнє або не містить @');
    return;
  }

  if (formSecondLabel.lastElementChild.value === '') {
    alert('Поле Message порожнє');
    return;
  }

  console.log(resultValue);

  myFormEl.reset();
  localStorage.clear();
});

defoltValueInput();
