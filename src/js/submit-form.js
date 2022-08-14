import refs from './refs';
import data from './data';
import { nanoid } from 'nanoid';
import createMarkup from './createMarkup';
import keys from './local-storage-keys.js';

const submitForm = event => {
  event.preventDefault();

  const newData = JSON.parse(localStorage.getItem(keys.CONTACTS)) ?? data;

  const { name, number } = event.currentTarget.elements;
  if (!name || !number) {
    alert('Заповніть всі поля');
    return;
  }
  newData.push({ name: name.value, number: number.value, id: nanoid() });
  refs.list.insertAdjacentHTML(
    'beforeend',
    createMarkup(newData[newData.length - 1])
  );

  localStorage.setItem(keys.CONTACTS, JSON.stringify(newData));

  event.currentTarget.reset();
};

refs.form.addEventListener('submit', submitForm);

const formData = { name: '', number: '' };

const onChangeInput = e => {  
  formData[e.target.name] = e.target.value;
  localStorage.setItem(keys.FORM_DATA, JSON.stringify(formData));
};
refs.form.addEventListener('input', onChangeInput);
