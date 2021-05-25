export function sum(...arg) {
    return arg.reduce((prev, current) => {
        return prev + current
    }, 0);
}