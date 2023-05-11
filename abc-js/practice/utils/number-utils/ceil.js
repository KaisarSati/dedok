

export function ceil(value) {
    if (typeof value !== 'number') throw Error('value must be only number type');
    var intPart = value | 0;
    return value > intPart ? intPart + 1 : intPart;
    
}
