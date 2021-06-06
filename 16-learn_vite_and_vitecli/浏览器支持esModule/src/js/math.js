export function sum(...args) {
    return args.reduce((preV, currV) => {
        return preV + currV
    }, 0);
}