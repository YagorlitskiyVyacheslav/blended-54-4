var e=({name:e,number:t,id:n})=>`<li class="contact-list__item">\n<p class="contact-list__name">${e}</p>\n<p class="contact-list__number">${t}</p>\n<button data-id="${n}" class="contact-list__button" type="button">\n  &#9785;\n</button>\n</li>`;var t=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}];var n={form:document.getElementById("form"),list:document.getElementById("contact-list")};let i=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce(((e,t)=>e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"),"");n.form.addEventListener("submit",(a=>{a.preventDefault();const{name:r,number:s}=a.currentTarget.elements;r&&s?(t.push({name:r.value,number:s.value,id:i()}),n.list.insertAdjacentHTML("beforeend",e(t[t.length-1])),a.currentTarget.reset()):alert("Заповніть всі поля")}));n.list.addEventListener("click",(i=>{const a=i.target.dataset.id,r=t.filter((e=>e.id!==a));r.length!==t.length&&(t.splice(0,t.length,...r),n.list.innerHTML=t.map((t=>e(t))).join(""))}));const a=t.map((t=>e(t)));n.list.insertAdjacentHTML("afterbegin",a.join(""));
//# sourceMappingURL=index.d51e71b8.js.map