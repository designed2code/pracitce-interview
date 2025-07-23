// https://leetcode.com/problems/interval-cancellation/description/?envType=study-plan-v2&envId=30-days-of-javascript

var cancellable = function (fn, args, t) {
  fn(...args);
  let id = setInterval(() => {
    fn(...args);
  }, t);
  return () => {
    clearInterval(id);
  };
};
