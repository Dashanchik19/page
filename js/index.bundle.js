!function(){var e,t={564:function(){var e=0;const t=document.querySelectorAll(".about__content"),n=document.querySelectorAll(".about__content1"),o=document.querySelectorAll(".about__image"),r=document.querySelectorAll(".about__image1");function c(e,t){e.forEach(((e,n)=>{e.classList.toggle("active",n===t)}))}function a(a){"next"===a?e=(e+1)%t.length:"prev"===a&&(e=(e-1+t.length)%t.length),c(t,e),c(n,e),c(o,e),c(r,e)}document.querySelector(".about__link").addEventListener("click",(e=>{e.target.classList.contains("ri-arrow-left-line")?a("prev"):e.target.classList.contains("ri-arrow-right-line")&&a("next")})),c(t,e),c(n,e),c(o,e),c(r,e)},924:function(){document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".footer__contacts .contacts .contact-item p").forEach((function(e){e.addEventListener("click",(function(){this.parentElement.classList.toggle("active")}))}))}))},903:function(){let e=document.querySelectorAll("label");e.forEach((t=>{t.addEventListener("click",(()=>{e.forEach((e=>{e.classList.remove("active")})),t.classList.add("active")}))})),lightGallery(document.querySelector(".gallery__photos"));var t=document.querySelectorAll("img[data-src]"),n=new IntersectionObserver((function(e,t){e.forEach((function(e){if(e.isIntersecting){var n=e.target;n.src=n.dataset.src,n.removeAttribute("data-src"),t.unobserve(n)}}))}),{rootMargin:"0px",threshold:.1});t.forEach((function(e){n.observe(e)}))},961:function(){function e(e){return new Promise((t=>setTimeout(t,e)))}document.addEventListener("DOMContentLoaded",(async()=>{const t=document.querySelectorAll(".modal"),n=document.querySelectorAll(".close");document.querySelectorAll(".info__modal-item").forEach((async t=>{t.addEventListener("click",(async()=>{const n=t.getAttribute("data-target"),o=document.getElementById(n);o.style.display="block",await e(10),o.style.opacity=1}))})),n.forEach((t=>{t.addEventListener("click",(async()=>{const n=t.closest(".modal");n.style.opacity=0,await e(400),n.style.display="none"}))})),window.addEventListener("click",(async n=>{t.forEach((async t=>{n.target===t&&(t.style.opacity=0,await e(400),t.style.display="none")}))}));const o=document.querySelectorAll(".modal__tabs h3"),r=document.querySelectorAll(".modal__tabs-content div");o.forEach(((e,t)=>{e.addEventListener("click",(async()=>{r.forEach((e=>{e.classList.remove("active")})),o.forEach((e=>{e.classList.remove("active")})),r[t].classList.add("active"),o[t].classList.add("active")}))}))}))},13:function(){const e=document.querySelector("select"),t=["ua","en"],n={titles:{ua:"Дитячий садочок Вулик ЗДО №28 Луцького району Волинської області",en:"Children's Kindergarten Vulyk Preschool Educational Institution No. 28 of the Lutsk District, Volyn Region"},navLink:{ua:'Дитячий садок "Вулик"',en:'Kindergarten "Vulyk"'},aboutMenu:{ua:"Про нас",en:"About"},offersMenu:{ua:"Пропозиції",en:"Offers"},scheduleMenu:{ua:"Режим дня",en:"Day routine"},teachersMenu:{ua:"Вихователі",en:"Teachers"},programsMenu:{ua:"Програма",en:"Programs"},parentsMenu:{ua:"Батькам",en:"To parents"},galleryMenu:{ua:"Галерея",en:"Gallery"},baseMenu:{ua:"Довідкова база",en:"Reference base"},contactsMenu:{ua:"Контакти",en:"Contacts"},location:{ua:"Волинь місто Луцьк",en:"Volyn, Lutsk City"},welcome:{ua:"Вас вітає дошкільний навчальний заклад",en:"Welcome to Preschool Educational Institution"},name:{ua:"№28 Вулик",en:"28"},titleinfo:{ua:"компенсуючого типу для дітей з вадами розвитку",en:"Compensatory Type for Children with Developmental Disabilities"},aboutTitle:{ua:"Про наш садочок",en:"About ours kindergarden"},about1:{ua:"Доброго дня! Ми раді вітати Вас на сторінці Дитячого садка №28 Вулик у Луцьку.",en:"About ours kindergarden"},about2:{ua:"Садок Вулик - це сучасний заклад дошкільної освіти для дітей віком від 2 до 7 років. Ми пропонуємо індивідуальний підхід до кожної дитини та створюємо для них комфортні умови для розвитку та навчання.",en:"About ours kindergarden"},about3:{ua:"Наш заклад розташований на вулиці Даньшина, 4, у затишному куточку міста,де панують спокій і безпека.",en:"About ours kindergarden"},about4:{ua:"Головною метою нашого садка є підготовка малюків до школи, підтримка фізичного і психічного здоров'я, розвиток соціальної адаптації та творчого мислення.",en:"About ours kindergarden"},offerstitle:{ua:"Наші пропозиції",en:"About ours kindergarden"},offersHead1:{ua:"Здорове харчування1",en:"About ours kindergarden"},offersHead2:{ua:"Здорове харчування2",en:"About ours kindergarden"},offersHead3:{ua:"Здорове харчування3",en:"About ours kindergarden"},offersHead4:{ua:"Здорове харчування4",en:"About ours kindergarden"},offersHead5:{ua:"Здорове харчування5",en:"About ours kindergarden"},offersHead6:{ua:"Здорове харчування6",en:"About ours kindergarden"},eventstitle:{ua:"Події",en:"Events"},eventsHead1:{ua:"П'ЯТНИЦЯ 1 ВЕРЕСНЯ",en:"FRI 1 SEP"},eventsHead2:{ua:"СЕРЕДА 13 ЖОВТНЯ",en:"WED 13 OCT"},eventsParty1:{ua:"Шкільна лінійка",en:"-----"},eventsParty2:{ua:"День осені",en:"------"},eventsdestanition1:{ua:"Луцьк",en:"---"},eventsdestanition2:{ua:"Луцьк",en:"---"},eventsMore:{ua:"Більше",en:"More"},infoTitle:{ua:"Режим дня",en:"Day routine"},teachersTitle:{ua:"Наші вихователі",en:"Our teachers"},teachersMore:{ua:"Більше",en:"More"},programsTitle:{ua:"Наша програма",en:"Our programs"},programDescrip:{ua:"Ми віддані турботі та освіті",en:"We are committed to care and education"},galleryTitle:{ua:"Галерея",en:"Gallery"}};e.addEventListener("change",(()=>{const t=e.value;window.location.hash=t,window.location.reload()})),(()=>{const o=window.location.hash.substring(1);t.includes(o)?(e.value=o,document.title=n.titles[o],document.querySelector(".navLink").textContent=n.navLink[o],document.querySelector(".aboutMenu").textContent=n.aboutMenu[o],document.querySelector(".offersMenu").textContent=n.offersMenu[o],document.querySelector(".scheduleMenu").textContent=n.scheduleMenu[o],document.querySelector(".teachersMenu").textContent=n.teachersMenu[o],document.querySelector(".programsMenu").textContent=n.programsMenu[o],document.querySelector(".parentsMenu").textContent=n.parentsMenu[o],document.querySelector(".galleryMenu").textContent=n.galleryMenu[o],document.querySelector(".baseMenu").textContent=n.baseMenu[o],document.querySelector(".contactsMenu").textContent=n.contactsMenu[o],document.querySelector(".local").textContent=n.location[o],document.querySelector(".title").textContent=n.welcome[o],document.querySelector(".title-number").textContent=n.name[o],document.querySelector(".aboutTitle").textContent=n.aboutTitle[o],document.querySelector(".about1").textContent=n.about1[o],document.querySelector(".about2").textContent=n.about2[o],document.querySelector(".about3").textContent=n.about3[o],document.querySelector(".about4").textContent=n.about4[o],document.querySelector(".offers__title").textContent=n.offerstitle[o],document.querySelector(".offersHead1").textContent=n.offersHead1[o],document.querySelector(".offersHead2").textContent=n.offersHead2[o],document.querySelector(".offersHead3").textContent=n.offersHead3[o],document.querySelector(".offersHead4").textContent=n.offersHead4[o],document.querySelector(".offersHead5").textContent=n.offersHead5[o],document.querySelector(".offersHead6").textContent=n.offersHead6[o],document.querySelector(".eventstitle").textContent=n.eventstitle[o],document.querySelector(".eventsHead1").textContent=n.eventsHead1[o],document.querySelector(".eventsHead2").textContent=n.eventsHead2[o],document.querySelector(".eventsParty1").textContent=n.eventsParty1[o],document.querySelector(".eventsParty2").textContent=n.eventsParty2[o],document.querySelector(".eventsdestanition1").textContent=n.eventsdestanition1[o],document.querySelector(".eventsdestanition2").textContent=n.eventsdestanition2[o],document.querySelector(".eventsMore").textContent=n.eventsMore[o],document.querySelector(".infoTitle").textContent=n.infoTitle[o],document.querySelector(".teachersTitle").textContent=n.teachersTitle[o],document.querySelector(".teachersMore").textContent=n.teachersMore[o],document.querySelector(".programsTitle").textContent=n.programsTitle[o],document.querySelector(".programDescrip").textContent=n.programDescrip[o],document.querySelector(".galleryTitle").textContent=n.galleryTitle[o]):(window.location.hash="ua",window.location.reload())})()},180:function(){const e=document.querySelector(".menu"),t=document.querySelector(".nav-open-menu"),n=document.querySelector(".menu-close-btn"),o=document.querySelector(".carousel");[t,n].forEach((t=>{t.addEventListener("click",(()=>{e.classList.toggle("open")}))})),e.addEventListener("transitionend",(function(){this.removeAttribute("style")})),e.querySelectorAll(".dropdown > i").forEach((e=>{e.addEventListener("click",(function(){this.closest(".dropdown").classList.toggle("active")}))})),window.addEventListener("scroll",(()=>{document.querySelector(".nav").classList.toggle("sticky",window.scrollY>0)})),window.addEventListener("click",(function(n){e.contains(n.target)||n.target===t||o.contains(n.target)||e.classList.remove("open")}));let r=document.querySelectorAll("section"),c=document.querySelectorAll(".menu ul li a");window.onscroll=()=>{let e=window.scrollY;r.forEach((t=>{let n=t.offsetTop-220,o=t.offsetHeight,r=t.getAttribute("id");if(e>=n&&e<n+o){let e=document.querySelector(`.menu ul li a[href*="${r}"]`);c.forEach((e=>e.classList.remove("active"))),e&&e.classList.add("active")}}))}},970:function(){new Swiper(".mySwiper",{slidesPerView:1,grid:{rows:2},spaceBetween:20,pagination:{el:".swiper-pagination",clickable:!0}})},420:function(){document.addEventListener("mousemove",(function(e){this.querySelectorAll(".layer").forEach((t=>{const n=t.getAttribute("data-speed"),o=(window.innerWidth-e.pageX*n)/100,r=(window.innerHeight-e.pageY*n)/100;t.style.transform=`translateX(${o}px) translateY(${r}px)`}))}));const e=document.querySelector(".programs__wrapper"),t=document.querySelector(".programs__carousel"),n=document.querySelectorAll(".programs__wrapper i"),o=document.querySelector(".programs__card").offsetWidth,r=[...t.children];let c,a,l,i=!1,u=Math.round(t.offsetWidth/o);r.slice(-u).reverse().forEach((e=>{t.insertAdjacentHTML("afterbegin",e.outerHTML)})),r.slice(0,u).forEach((e=>{t.insertAdjacentHTML("beforeEnd",e.outerHTML)})),n.forEach((e=>{e.addEventListener("click",(()=>{t.scrollLeft+="left"===e.id?-o:o}))}));const s=()=>{window.innerWidth<800||(l=setTimeout((()=>t.scrollLeft+=o),2500))};s(),t.addEventListener("mousedown",(e=>{i=!0,t.classList.add("dragging"),c=e.pageX,a=t.scrollLeft})),t.addEventListener("mousemove",(e=>{i&&(t.scrollLeft=a-(e.pageX-c))})),document.addEventListener("mouseup",(()=>{i=!1,t.classList.remove("dragging")})),t.addEventListener("scroll",(()=>{0===t.scrollLeft?(t.classList.add("no-transition"),t.scrollLeft=t.scrollWidth-2*t.offsetWidth,t.classList.remove("no-transition")):Math.ceil(t.scrollLeft)===t.scrollWidth-t.offsetWidth&&(t.classList.add("no-transition"),t.scrollLeft=t.offsetWidth,t.classList.remove("no-transition")),clearTimeout(l),e.matches(":hover")||s()})),e.addEventListener("mouseenter",(()=>clearTimeout(l))),e.addEventListener("mouseleave",s)},650:function(){let e=document.querySelector("#teachers__load-more"),t=5;e.addEventListener("click",(()=>{let e=[...document.querySelectorAll(".container .teachers__cards .teachers__card")];for(var n=t;n<t+4;n++)e[n].style.display="inline-block";t+=4}));let n=document.querySelector(".teachers__preview"),o=n.querySelectorAll(".preview");const r=document.querySelectorAll(".close");document.querySelectorAll(".teachers__card").forEach((e=>{e.addEventListener("click",(()=>{n.style.display="flex";let t=e.getAttribute("data-name");o.forEach((e=>{let n=e.getAttribute("data-target");t==n&&e.classList.add("active")}))}))})),r.forEach((e=>{e.addEventListener("click",(()=>{let t=e.closest(".preview");n.style.display="none",t.style.display="none"}))}))}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var c=n[e]={exports:{}};return t[e](c,c.exports,o),c.exports}o.m=t,o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))},o.u=function(e){return e+".bundle.js"},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},o.l=function(t,n,r,c){if(e[t])e[t].push(n);else{var a,l;if(void 0!==r)for(var i=document.getElementsByTagName("script"),u=0;u<i.length;u++){var s=i[u];if(s.getAttribute("src")==t){a=s;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.src=t),e[t]=[n];var d=function(n,o){a.onerror=a.onload=null,clearTimeout(m);var r=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(o)})),n)return n(o)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),l&&document.head.appendChild(a)}},function(){var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e}(),function(){var e={57:0};o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=c);var a=o.p+o.u(t),l=new Error;o.l(a,(function(n){if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var c=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+c+": "+a+")",l.name="ChunkLoadError",l.type=c,l.request=a,r[1](l)}}),"chunk-"+t,t)}};var t=function(t,n){var r,c,a=n[0],l=n[1],i=n[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(r in l)o.o(l,r)&&(o.m[r]=l[r]);i&&i(o)}for(t&&t(n);u<a.length;u++)c=a[u],o.o(e,c)&&e[c]&&e[c][0](),e[c]=0},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),function(){"use strict";o(180);let e=document.getElementById("next"),t=document.getElementById("prev"),n=document.querySelector(".carousel"),r=n.querySelector(".carousel__list"),c=document.querySelector(".thumbnail"),a=c.querySelectorAll(".thumbnail__item");c.appendChild(a[0]);let l,i,u=3e3,s=1e4;const d=new IntersectionObserver((n=>{n.forEach((n=>{n.isIntersecting?m():(e.onclick=null,t.onclick=null,clearTimeout(i))}))}),{root:null,rootMargin:"0px",threshold:.5});function m(){e.onclick=function(){f("next")},t.onclick=function(){f("prev")},i=setTimeout((()=>{next.click()}),s)}function f(e){let t=r.querySelectorAll(".carousel__item"),o=document.querySelectorAll(".thumbnail__item");"next"===e?(r.appendChild(t[0]),c.appendChild(o[0]),n.classList.add("next")):(r.prepend(t[t.length-1]),c.prepend(o[o.length-1]),n.classList.add("prev")),clearTimeout(l),l=setTimeout((()=>{n.classList.remove("next"),n.classList.remove("prev")}),u),clearTimeout(i),i=setTimeout((()=>{next.click()}),s)}m(),d.observe(n),o(564),o(961),o(970),o(650),o(420),o(903),o(924),o(13);const y=document.querySelector(".counter");window.addEventListener("scroll",(async function e(){if(function(e){const t=e.getBoundingClientRect();return t.top<=window.innerHeight&&t.bottom>=0}(y))try{const{counter:t}=await o.e(73).then(o.bind(o,73));t(),window.removeEventListener("scroll",e),console.log("Працює")}catch(e){console.error("Помилка під час динамічного імпорту модуля counter:",e)}})),async function(){try{const{initializeSocial:e}=await o.e(526).then(o.bind(o,526));e();const t=document.querySelector(".social__map");t&&t.addEventListener("click",(()=>{var e=L.map("map").setView([50.728319090473846,25.298594209031943],13);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap contributors"}).addTo(e),L.marker([50.728319090473846,25.298594209031943]).addTo(e).bindPopup("").openPopup()}))}catch(e){console.error("Помилка під час динамічного імпорту коду соціальних іконок:",e)}}()}()}();