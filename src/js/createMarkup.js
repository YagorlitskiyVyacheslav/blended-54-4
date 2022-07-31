const createMarkup = ({ name, number, id }) => `<li class="contact-list__item">
<p class="contact-list__name">${name}</p>
<p class="contact-list__number">${number}</p>
<button data-id="${id}" class="contact-list__button" type="button">
  &#9785;
</button>
</li>`;

export default createMarkup;
