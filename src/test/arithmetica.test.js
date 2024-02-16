const { add } = require("../arithmetica")

test('2+3 is equal to 5', () => {
    expect(add(2,3)).toBe(5);
});

test('2+10 is equal to 12', () => {
    expect(add(2,10)).toBe(12);
});

test('1000+200.5 is equal to 1200.5', () => {
    expect(add(1000,200.5)).toBe(1200.5);
});
