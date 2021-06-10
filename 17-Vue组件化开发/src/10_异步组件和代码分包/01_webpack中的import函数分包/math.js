function sum(...args) {
    return args.reduce((preV, nowV) => {
        return preV + nowV
    }, 0);
}

export {
    sum
}