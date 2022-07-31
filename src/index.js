import createMarkup from './js/createMarkup';
import data from './js/data';
import refs from './js/refs';

import './js/submit-form';
import './js/delete-button-event';
import keys from './js/local-storage-keys';

const source = localStorage.getItem(keys.CONTACTS);
const sourceParse = JSON.parse(source);

const contactList = (sourceParse ?? data).map(contact => createMarkup(contact));

refs.list.insertAdjacentHTML('afterbegin', contactList.join(''));

// localStorage.setItem('contacts', JSON.stringify(data));

// console.log(JSON.parse(localStorage.getItem('contacts')));
const formData = localStorage.getItem(keys.FORM_DATA);
if (JSON.parse(formData)) {
    refs.form.elements.name.value = JSON.parse(formData).name;
    refs.form.elements.number.value = JSON.parse(formData).number;
}