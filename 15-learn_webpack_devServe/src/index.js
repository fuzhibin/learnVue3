import { sum } from './js/main'
const { info } = require('./js/foo');

import "./js/element"
import "./css/title.css"
import "./css/color.less"
import "./css/iconfont.css"

if (module.hot) {
    module.hot.accept('./js/foo', _ => {
        console.log('aaaa');
    })
}
console.log(sum(1, 2, 3));
console.log(info);