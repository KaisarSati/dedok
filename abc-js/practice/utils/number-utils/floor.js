/** возвращает целую часть числа уменьшенную в меньшую сторону */
export function floor(value) {
    if (typeof value !== 'number') throw Error ('value must be only number type');
    var intPart = value | 0;
    return value >= 0 || value === intPart ? intPart : intPart - 1;
}
