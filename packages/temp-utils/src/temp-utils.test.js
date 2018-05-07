import { c2f, f2c, average } from './temp-utils';

test('converts 100 centigrade to 212 fahrenheit', () => {
    expect(c2f(100)).toBe(212);
});

test('converts 212 fahrenheit to 100 centigrade', () => {
    expect(f2c(212)).toBe(100);
});

test('calculates the average of [10, 20, 30] as 20', () => {
    expect(average([10, 20, 30])).toBe(20);
});
