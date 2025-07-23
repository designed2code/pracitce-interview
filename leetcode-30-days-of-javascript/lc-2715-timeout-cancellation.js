// https://leetcode.com/problems/timeout-cancellation/description/?envType=study-plan-v2&envId=30-days-of-javascript

var cancellation = function (fn, args, t) {
  let cancel = false;
  setTimeout(() => {
    if (cancel) return;
    fn(...args);
  }, t);
  return () => {
    cancel = true;
  };
};
