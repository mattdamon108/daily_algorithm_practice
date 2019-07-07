const dt = require("../disemvowelTrolls");

test('Disemvowel("This website is for losers LOL!")', () => {
  expect(dt.disemvowel("This website is for losers LOL!")).toBe(
    "Ths wbst s fr lsrs LL!"
  );
});
