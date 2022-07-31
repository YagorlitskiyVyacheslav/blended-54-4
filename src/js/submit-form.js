import refs from './refs';
import data from './data';
import { nanoid } from 'nanoid';
import createMarkup from './createMarkup';

const submitForm = event => {
  event.preventDefault();
  const { name, number } = event.currentTarget.elements;
  if (!name || !number) {
    alert('Заповніть всі поля');
    return;
  }
  data.push({ name: name.value, number: number.value, id: nanoid() });
  refs.list.insertAdjacentHTML(
    'beforeend',
    createMarkup(data[data.length - 1])
  );
  event.currentTarget.reset();
};

refs.form.addEventListener('submit', submitForm);
