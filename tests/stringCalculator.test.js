const {add} = require('../src/stringCalculator')

test('returns 0 for empty string', ()=>{
    expect(add("")).toBe(0);
});

test('returns number if single number string passed', () => {
    expect(add("5")).toBe(5);
});

test('rteurns the sum of two comma separated integers', ()=> {
    expect(add('1,2')).toBe(3);
});

test('returns the sum of multiple comma separated integers', () => {
    expect(add('1,2,3,4')).toBe(10);
});

test('handles new lines as delimiters along with commas', () => {
    expect(add("1\n2,3")).toBe(6);
});

test('supports custom single-character delimiter', () => {
    expect(add("//;\n1;2")).toBe(3);
});

test('throws error when negative numbers are provided', () => {
    expect(() => add("1,-2,3,-4")).toThrow("Negatives not allowed: -2,-4");
});

  