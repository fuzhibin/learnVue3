export function sum(...arg) {
    return arg.reduce((pre, val) => {
        return pre + val
    }, 0);
}