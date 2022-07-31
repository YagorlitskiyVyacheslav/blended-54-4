import refs from './refs';
import data from './data';
import createMarkup from './createMarkup';
import keys from './local-storage-keys';

const onClickDeleteBtn = event => {
  const contactID = event.target.dataset.id;
  const newData = data.filter(item => item.id !== contactID);
  if (newData.length === data.length) return;
  data.splice(0, data.length, ...newData);
  refs.list.innerHTML = data.map(contact => createMarkup(contact)).join('');
  localStorage.setItem(keys.CONTACTS, JSON.stringify(newData));
};

refs.list.addEventListener('click', onClickDeleteBtn);
