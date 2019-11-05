export function addTwo(x) {
  return x + 2;
}

export function addThree(x) {
  return x + 3;
}

export function addFive(x) {
  return x + 5;
}

export function compose(...fns) {
  return x => fns.reduce((promise, fn) => promise.then(fn), Promise.resolve(x))
}

// let addTen = compose(addTwo, addThree, addFive);
