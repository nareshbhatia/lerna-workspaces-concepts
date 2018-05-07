import reduce from 'lodash/reduce';

export function c2f(c) {
    return c * 1.8 + 32;
}

export function f2c(f) {
    return (f - 32) / 1.8;
}

export function average(temps) {
    const sum = reduce(temps, function(sum, temp) {
        return sum + temp;
    }, 0);
    return sum / temps.length;
}
