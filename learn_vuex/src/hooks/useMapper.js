import { computed } from "vue";
import { useStore } from "vuex";

export default function(query, fn) {
    const store = useStore();
    const obj = {};
    const fns = fn(query);
    Object.keys(fns).forEach(fn => {
        const fun = fns[fn].bind({ $store: store });
        obj[fn] = computed(fun)
    })
    return obj
}