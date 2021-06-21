import { customRef } from 'vue';

export default function(value, delay) {
    let timer = null;
    return customRef((track, trigger) => {
        return {
            set(newValue) {
                if (timer) clearTimeout(timer);
                timer = setTimeout(_ => {
                    value = newValue;
                    trigger()
                }, delay)
            },
            get() {
                track();
                return value
            }
        }
    })
}