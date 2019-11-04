import { addTwo, addThree, addFive, compose } from '../';

test('serial promise composition', () => {
  let addTen = compose(
    addTwo,
    addThree,
    addFive
  );

  return addTen(8).then(data => {
    expect(data).toBe(18);
  });
});
