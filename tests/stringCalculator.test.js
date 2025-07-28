const {add} = require('../src/stringCalculator')

test('returns 0 for empty string', ()=>{
    expect(add("")).toBe(0);
});

test('returns number if single number string passed', () => {
    expect(add("5")).toBe(5);
  });
  