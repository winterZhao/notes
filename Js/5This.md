#this
1. 方法前面有'.'  ,   '.'前面的即为方法里的this对象;
2. 自执行函数里的this为window;
3. 给事件绑定方法，方法里的this为事件对象;
4. 构造函数里的this为当前实例;
5. call和apply具有改变this指针的作用;