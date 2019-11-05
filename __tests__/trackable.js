import { TrackablePromise } from '../promise/trackable';

jest.setTimeout(10000); // 10 second
test('trackable promise', () => {
  let p = new TrackablePromise((resolve, reject, notify) => {
    function countdown(x) {
      if (x > 0) {
        notify(`${20 * x}% remaining`);
        setTimeout(() => countdown(x - 1), 1000);
      } else {
        resolve('done');
      }
    }
    countdown(5);
  });
  p.notify(x => setTimeout(console.log, 0, 'progress:', x))
  return p.then((data) => expect(data).toBe('done'));
});
