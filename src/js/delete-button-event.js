import refs from './refs';
import data from './data';
import createMarkup from './createMarkup';

const onClickDeleteBtn = event => {
  const contactID = event.target.dataset.id;
  const newData = data.filter(item => item.id !== contactID);
  if (newData.length === data.length) return;
  data.splice(0, data.length, ...newData);
  refs.list.innerHTML = data.map(contact => createMarkup(contact)).join('');
};

refs.list.addEventListener('click', onClickDeleteBtn);
