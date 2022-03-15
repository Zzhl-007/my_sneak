(function (window, undefined) {
  let Tools = {
    getRandom(min = 0, max = 255) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  };

  window.Tools = Tools;
})(window, undefined);
