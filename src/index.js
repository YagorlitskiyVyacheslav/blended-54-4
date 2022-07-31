import { nanoid } from 'nanoid';

const data = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const refs = {
  form: document.getElementById('form'),
  list: document.getElementById('contact-list'),
};

const createMarkup = ({ name, number, id }) => `<li class="contact-list__item">
<p class="contact-list__name">${name}</p>
<p class="contact-list__number">${number}</p>
<button data-id="${id}" class="contact-list__button" type="button">
  &#9785;
</button>
</li>`;

const contactList = data.map(contact => createMarkup(contact));

refs.list.insertAdjacentHTML('afterbegin', contactList.join(''));

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

const onClickDeleteBtn = event => {
  const contactID = event.target.dataset.id;
  const newData = data.filter(item => item.id !== contactID);
  if (newData.length === data.length) return;
  data.splice(0, data.length, ...newData);
  refs.list.innerHTML = data.map(contact => createMarkup(contact)).join('');
};

refs.list.addEventListener('click', onClickDeleteBtn);
