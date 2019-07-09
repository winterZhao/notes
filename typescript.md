
### 1. 数据类型
* 布尔值: 
* 数字: 
* 字符串: let myName: string = 'Tom';
* 空值: 用 void 表示没有任何返回值的函数;
* null 和 undefined:   
* any: 任意类型;
* 数组:  Array<元素类型>
* 元组(Tuple):针对常量   
* 枚举: 
* 联合类型使用 | 分隔每个类型: 
* Object: 除number，string，boolean，symbol，null或undefined之外的类型。

        // 布尔
            let isDone: boolean = false;
        // 数字
            let decLiteral: number = 6;
        // 字符串
            let myName: string = 'Tom';
        // 空值
            funciton move():void(){}
        // null 和undefined
            let u: undefined = undefined;   let n: null = null;
        // 其他类型的也可以定义为undefined/null
            let num: number = undefined;
        // 任意类型
            let a:any = 23;  a = '23';
        // 数组
            let arr:Array<string> = ['23','43']
        // 元组
            let x: [string, number] = ['hello', 10];
        // 枚举
            enum Color {Red, Green, Blue}
            let c: Color = Color.Green;
        // 联合类型使用 | 分隔每个类型
            let myFavoriteNumber: string | number = 23;

* 对象:

    interface Person {
        readonly id: number;
        name: string;
        age?: number;
        [propName: string]: string;
    }

    let tom: Person = {
        id: 89757,
        name: 'Tom',
        age: 25,
        gender: 'male'
    };

* 函数:输入多余的（或者少于要求的）参数是不允许的; 可选参数必须接在必需参数后面; 允许给函数的参数添加默认值; ...rest 的方式获取函数中的剩余参数

    function sum(x: number, y?: number, ...items:Array<any>): number {
        return x + y;
    }    

### 2. 类型断言
格式形如  xx as string

    function getLength(something: string | number): number {
        if ((something as string).length) {
            return (something as string).length;
        } else {
            return something.toString().length;
        }
    }

### 3. 类
#### 3.1 类的概念
* 类(Class)：定义了一件事物的抽象特点，包含它的属性和方法
* 对象（Object）：类的实例，通过 new 生成
* 面向对象（OOP）的三大特性：封装、继承、多态
* 封装（Encapsulation）：将对数据的操作细节隐藏起来，只暴露对外的接口。外界调用端不需要（也不可能）知道细节，就能通过对外提供的接口来访问该对象，同时也保证了外界无法任意更改对象内部的数据
* 继承（Inheritance）：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性
* 多态（Polymorphism）：由继承而产生了相关的不同的类，对同一个方法可以有不同的响应。比如 Cat 和 Dog 都继承自 Animal，但是分别实现了自己的 eat 方法。此时针对某一个实例，我们无需了解它是 Cat 还是 Dog，就可以直接调用 eat 方法，程序会自动判断出来应该如何执行 eat
* 存取器（getter & setter）：用以改变属性的读取和赋值行为
* 修饰符（Modifiers）：修饰符是一些关键字，用于限定成员或类型的性质。比如 public 表示公有属性或方法
* 抽象类（Abstract Class）：抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现
* 接口（Interfaces）：不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现（implements）。一个类只能继承自另一个类，但是可以实现多个接口

#### 3.2 类的用法
class: 定义类
extends: 实现继承
getter 和 setter: 可以改变属性的赋值和读取行为
static: 静态属性/方法，不允许实例化
public: 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
private: 修饰的属性或方法是私有的，不允许实例化访问,不允许子类继承
protected: 修饰的属性或方法允许子类继承，不允许实例化访问
abstract: 定义抽象类,允许子类继承、不允许实例化的类，例如基类
implements: 类实现接口

    interface IAnimail {
        name: string,
    }
    abstract class Animal implements IAnimail {
        private age;
        protected sex;
        public constructor(name) {
            this.name = name;
        }
        static say() {
            console.log('I\'m animal')
        }
        get name() {
            return this.name
        }
        set name(val: string) {
            this.name = val;
        }
        public abstract sayHi();
    }

    class Cat extends Animal {
        public sayHi() {
            console.log(`Meow, My name is ${this.name}`);
        }
    }

    console.log(Animal.say)
    let cat = new Cat('Tom');
    cat.sayHi()


### 4. 泛型
使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据

    // 定义泛型类型T,输入的参数为T类型，输出的返回值为数组T类型
    function identity<T>(arg: T): Array<T> {
        return [arg];
    }
    let t = identity(2);
    console.log(t)

### 5. typescript + eslint
[代码检查](https://ts.xcatliu.com/engineering/lint)

### 参考
[https://ts.xcatliu.com/introduction/what-is-typescript](https://ts.xcatliu.com/introduction/what-is-typescript)
