import zznh from '../img/zznh.jpg'



const txtEl = document.createElement('div');
txtEl.className = 'message';
txtEl.innerHTML = "HELLO VUE3!";
document.body.appendChild(txtEl);


const divEl = document.createElement('div');
divEl.className = 'one-box';
document.body.appendChild(divEl);

const imgEl = document.createElement('img');
imgEl.src = zznh;
document.body.appendChild(imgEl);

const iEl = document.createElement('i');
iEl.className = 'iconfont aichegujiabeifen7';
document.body.appendChild(iEl)