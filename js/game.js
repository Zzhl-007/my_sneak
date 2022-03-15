(function (window, undefined) {
  let that;
  function Game(map) {
    this.food = new Food();
    this.snake = new Snake();
    this.map = map;
    that = this;
  }

  Game.prototype.start = function () {
    //游戏开始，蛇和食物渲染到页面
    this.food.render(this.map);
    this.snake.render(this.map);

    //游戏的逻辑
    //自动移动
    runSnake();
    //控制移动
    control();
  };

  function runSnake() {
    //蛇自动开始移动
    let timer = setInterval(
      function () {
        this.snake.move(this.food, this.map);
        this.snake.render(this.map);
        //边界限制
        //蛇头坐标
        let headLeft = this.snake.body[0].left;
        let headTop = this.snake.body[0].top;
        //限制条件
        let maxLeft = this.map.offsetWidth / this.snake.width;
        let maxTop = this.map.offsetHeight / this.snake.height;
        //判断条件
        if (headLeft < 0 || headLeft >= maxLeft) {
          alert('Game Over');
          clearInterval(timer);
        }
        if (headTop < 0 || headTop >= maxTop) {
          alert('Game Over');
          clearInterval(timer);
        }
      }.bind(that),
      150
    );
  }

  //键盘控制移动
  function control() {
    document.addEventListener(
      'keydown',
      function (e) {
        switch (e.keyCode) {
          case 37:
            this.snake.direction = 'left';
            break;
          case 38:
            this.snake.direction = 'top';
            break;
          case 39:
            this.snake.direction = 'right';
            break;
          case 40:
            this.snake.direction = 'bottom';
            break;
        }
      }.bind(that)
    );
  }

  window.Game = Game;
})(window, undefined);
