import refs from './refs';
import data from './data';
import createMarkup from './createMarkup';
import keys from './local-storage-keys';

const onClickDeleteBtn = event => {
  const contactID = event.target.dataset.id;
  const newData = JSON.parse(localStorage.getItem(keys.CONTACTS)) ?? data
  const filteredData = newData.filter(item => item.id !== contactID);  
  if (filteredData.length === newData.length) return;
  newData.splice(0, newData.length, ...filteredData);
  refs.list.innerHTML = newData.map(contact => createMarkup(contact)).join('');
  localStorage.setItem(keys.CONTACTS, JSON.stringify(filteredData));
};

refs.list.addEventListener('click', onClickDeleteBtn);
