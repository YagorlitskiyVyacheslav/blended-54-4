!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a),a.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=a("8NIkP"))&&n.__esModule?n:{default:n}})),a.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),a.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),a.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=a("8NIkP"))&&n.__esModule?n:{default:n}}));var o=function(e){var t=e.name,n=e.number,r=e.id;return'<li class="contact-list__item">\n<p class="contact-list__name">'.concat(t,'</p>\n<p class="contact-list__number">').concat(n,'</p>\n<button data-id="').concat(r,'" class="contact-list__button" type="button">\n  &#9785;\n</button>\n</li>')},i=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],u={form:document.getElementById("form"),list:document.getElementById("contact-list")},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")},s={CONTACTS:"contacts",FORM_DATA:"form-data"};u.form.addEventListener("submit",(function(e){var t;e.preventDefault();var n=null!==(t=JSON.parse(localStorage.getItem(s.CONTACTS)))&&void 0!==t?t:i,r=e.currentTarget.elements,a=r.name,c=r.number;a&&c?(n.push({name:a.value,number:c.value,id:l()}),u.list.insertAdjacentHTML("beforeend",o(n[n.length-1])),localStorage.setItem(s.CONTACTS,JSON.stringify(n)),e.currentTarget.reset()):alert("Заповніть всі поля")}));var c={name:"",number:""};u.form.addEventListener("input",(function(e){console.log(e.target),c[e.target.name]=e.target.value,localStorage.setItem(s.FORM_DATA,JSON.stringify(c))}));var d={};Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(e){return f.default(e)||m.default(e)||g.default(e)||p.default()};var f=v(a("kMC0W")),m=v(a("7AJDX")),p=v(a("8CtQK")),g=v(a("auk6i"));function v(e){return e&&e.__esModule?e:{default:e}}u.list.addEventListener("click",(function(t){var n,r=t.target.dataset.id,a=i.filter((function(e){return e.id!==r}));a.length!==i.length&&((n=i).splice.apply(n,[0,i.length].concat(e(d)(a))),u.list.innerHTML=i.map((function(e){return o(e)})).join(""),localStorage.setItem(s.CONTACTS,JSON.stringify(a)))}));var b=localStorage.getItem(s.CONTACTS),_=JSON.parse(b),y=(null!=_?_:i).map((function(e){return o(e)}));u.list.insertAdjacentHTML("afterbegin",y.join(""));var O=localStorage.getItem(s.FORM_DATA);JSON.parse(O)&&(u.form.elements.name.value=JSON.parse(O).name,u.form.elements.number.value=JSON.parse(O).number)}();
//# sourceMappingURL=index.e5d5a3a0.js.map