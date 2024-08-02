const throttle = (callback, delay = 100) => {
  let last = null;
  let time = null;

  return (...args) => {
    const now = +new Date();
    if (last && now < last + delay) {
      clearTimeout(time);
      time = setTimeout(() => {
        last = now;
        callback.apply(this, args);
      }, delay);
    } else {
      last = now;
      callback.apply(this, args);
    }
  };
};

export default throttle;
