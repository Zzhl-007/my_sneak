(function (window, undefined) {
  let divs = [];
  function Food(options) {
    let defaultOptions = {
      width: 20,
      height: 20,
      backgroundColor: 'green',
      left: 0,
      top: 0,
    };
    Object.assign(defaultOptions, options);
    //设置食物属�?
    this.width = defaultOptions.width;
    this.height = defaultOptions.height;
    this.left = defaultOptions.left;
    this.top = defaultOptions.top;
    this.backgroundColor = defaultOptions.backgroundColor;
  }

  //渲染食物
  Food.prototype.render = function (map) {
    //删除上一次出现的食物
    remove();

    //创建插入新的食物
    let div = document.createElement('div');
    map.appendChild(div);
    //食物随机位置
    this.left = Tools.getRandom(0, map.offsetWidth / this.width - 1) * this.width;
    this.top = Tools.getRandom(0, map.offsetHeight / this.height - 1) * this.height;

    div.style.position = 'absolute';
    div.style.width = this.width + 'px';
    div.style.height = this.height + 'px';
    div.style.left = this.left + 'px';
    div.style.top = this.top + 'px';
    div.style.backgroundColor = this.backgroundColor;
    //把新食物插入到数�?
    divs.push(div);
  };

  function remove() {
    if (divs.length === 0) return;
    //数组塌陷，倒着删可以解�?
    for (let i = divs.length - 1; i >= 0; i--) {
      //删除div
      divs[i].parentNode.removeChild(divs[i]);
      //删除数组元素
      divs.splice(i, 1);
    }
  }

  window.Food = Food;
})(window, undefined);
