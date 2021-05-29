export function sum(...args) {
    return args.reduce((preV, current) => {
        return preV + current
    }, 0)
}