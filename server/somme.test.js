const somme = require('./somme');

test('2 + 3 doit donner 5', () => {
  expect(somme(2, 3)).toBe(5);
});

test('10 + 5 doit donner 15', () => {
  expect(somme(10, 5)).toBe(15);
});
