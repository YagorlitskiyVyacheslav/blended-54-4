import createMarkup from './js/createMarkup';
import data from './js/data';
import refs from './js/refs';

import './js/submit-form';
import './js/delete-button-event';

const contactList = data.map(contact => createMarkup(contact));

refs.list.insertAdjacentHTML('afterbegin', contactList.join(''));

// localStorage.setItem('contacts', JSON.stringify(data));

// console.log(JSON.parse(localStorage.getItem('contacts')));
