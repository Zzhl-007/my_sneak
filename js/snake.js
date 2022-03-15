(function (window, undefined) {
  //记录创建的蛇节
  let part = [];
  function Snake(options) {
    let defaultOptions = {
      width: 20,
      height: 20,
      direction: 'right',
    };
    Object.assign(defaultOptions, options);

    this.width = defaultOptions.width;
    this.height = defaultOptions.height;
    this.direction = defaultOptions.direction;
    //蛇节信息
    this.body = [
      { left: 3, top: 2, color: 'red' },
      { left: 2, top: 2, color: 'skyblue' },
      { left: 1, top: 2, color: 'skyblue' },
    ];
  }

  Snake.prototype.render = function (map) {
    //移除移动之前渲染的蛇
    remove();
    let len = this.body.length;
    //把每一个蛇节循环渲染
    for (let i = 0; i < len; i++) {
      let info = this.body[i];
      let div = document.createElement('div');
      map.appendChild(div);
      //设置各个蛇节的样式
      div.style.position = 'absolute';
      div.style.width = this.width + 'px';
      div.style.height = this.height + 'px';
      div.style.left = this.width * info.left + 'px';
      div.style.top = this.width * info.top + 'px';
      div.style.backgroundColor = info.color;
      //把创建的蛇节放入记录中
      part.push(div);
    }
  };

  //蛇移动中div的变化
  Snake.prototype.move = function (food, map) {
    //身体变为上一节的位置
    for (let i = this.body.length - 1; i > 0; i--) {
      this.body[i].left = this.body[i - 1].left;
      this.body[i].top = this.body[i - 1].top;
    }
    //蛇头移动
    let head = this.body[0];
    switch (this.direction) {
      case 'right':
        head.left += 1;
        break;
      case 'left':
        head.left -= 1;
        break;
      case 'top':
        head.top -= 1;
        break;
      case 'bottom':
        head.top += 1;
        break;
    }

    //蛇头与食物重合
    let headX = head.left * this.width;
    let headY = head.top * this.height;
    if (headX === food.left && headY === food.top) {
      //蛇增长（向蛇节信息中增加数据）
      //信息数据与增长前最后一节一样（拷贝一份数据）
      let last = this.body[this.body.length - 1];
      let increase = Object.assign({}, last);
      this.body.push(increase);
      //食物重新生成
      food.render(map);
    }
  };

  //移除移动之前渲染的蛇
  function remove() {
    if (part.length === 0) return;
    for (let i = part.length - 1; i >= 0; i--) {
      part[i].parentNode.removeChild(part[i]);
      part.splice(i, 1);
    }
  }

  window.Snake = Snake;
})(window, undefined);
