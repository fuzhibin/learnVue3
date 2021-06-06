import imgFile from '../imgs/zznh.jpg'

const h2E = document.createElement('h2');
h2E.className = 'message';
h2E.innerHTML = 'HELLO VUE3!'
document.body.appendChild(h2E);

const divEl = document.createElement('div');
divEl.className = 'div-css';
document.body.appendChild(divEl);

const imgEl = document.createElement('img');
imgEl.src = imgFile;
document.body.appendChild(imgEl);

const iEl = document.createElement('i');
iEl.className = "iconfont icon-aichegujiabeifen7";
iEl.style.fontSize = 30 + 'px';
document.body.appendChild(iEl);