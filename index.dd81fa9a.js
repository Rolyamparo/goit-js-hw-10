function e(e){return fetch(`https://api.thecatapi.com/v1/images/search?api_key=live_FrZpvSLffrp6y08PSqTBcaaZLbryX9mu0wJZPsMt7IWEJNMNFp7ntcBzmPdaQTty&breed_ids=${e}`).then((e=>{if(e.ok)return e.json();throw new Error(e.status)}))}const t=document.querySelector(".breed-select"),s=document.querySelector(".cat-info"),n=document.querySelector(".loader"),i=document.querySelector(".error");function r(){i.classList.remove("is-hidden"),t.classList.add("is-hidden")}i.classList.add("is-hidden"),fetch("https://api.thecatapi.com/v1/breeds?api_key=live_FrZpvSLffrp6y08PSqTBcaaZLbryX9mu0wJZPsMt7IWEJNMNFp7ntcBzmPdaQTty").then((e=>{if(e.ok)return e.json();throw new Error(e.status)})).then((e=>{n.classList.replace("loader","is-hidden");let s=e.map((({name:e,id:t})=>`<option value=${t}>${e}</option>`));t.insertAdjacentHTML("beforeend",s),t.classList.remove("is-hidden")})).catch(r),t.addEventListener("change",(t=>{n.classList.replace("is-hidden","loader"),s.classList.add("is-hidden"),e(t.target.value).then((e=>{const{url:t,breeds:i}=e[0],{name:r,description:a,temperament:d}=i[0];s.innerHTML=`\n            <img src='${t}' alt='{name}' width="400"/>\n            <div class='box'>\n                <h2>${r}</h2>\n                <p>${a}</p>\n                <p>${d}</p>\n            </div>\n        `,s.classList.remove("is-hidden"),n.classList.add("is-hidden")})).catch(r)}));
//# sourceMappingURL=index.dd81fa9a.js.map
