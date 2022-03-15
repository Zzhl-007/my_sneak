# my_sneak
my_sneak program
### 相关技术
#### 面向对象
##### 文件模块
- main.js入口文件
- tool.js实现随机方块
- game.js游戏初始化
    利用定时器实现蛇一开始自动移动，注意清楚定时器，防止内存泄漏。
    难点：定时器中的回调函数利用了bind绑定对象（将外层的this保存在that中），ES6也可以利用箭头函数（箭头函数没有自己的this，而是使用定义所在作用域中的this）。
    键盘控制模块，利用addEventListener监听键盘按下事件。
- food.js渲染食物方块
    利用数组保存，push推入数组，难点：数组删除时，会发生数组塌陷，采用倒着循环遍历解决此问题。
- sneak.js
    根据蛇的移动，实时渲染蛇的状态，利用形式参数options和Object.assign(defaultOptions,options)实现传参用参，不传用默认，ES6中则可以直接使用默认参数技术实现。
    Object.assign()也可以拷贝数据，只不过是浅拷贝，引用数据类型只会拷贝指针。
  
