### node自定义一命令行工具

第一部分可以生成一个自定义命令,例如常见的"express",yargs和commander则可以在生成的自定义命令上做扩展,yargs将命令扩展成类似`express --l xx`的形式;而commander则可以扩展成类似 'express install xx'形式,也可以扩展成`express -e xx`的形式,前者写法简单，后者扩展性更好。


1. [生成自定义命令](#a2)
2. [yargs](#a1)
3. [commander](#a3)
3. [完整例子](#a4)

----------

####  <a id='a2'>生成自定义命令</a>
1. 新建文件夹`test`,并进入;
2. 执行`npm init` 生成`package.json`文件;
3. 同级目录下新建`hello js`，内容如下:
```js
 #! /usr/bin/env node

'use strict';
console.log('123');
```

4. 在`package.json`里添加内容` "bin": {"hello": "hello.js"}`:
```js
//package.json

 {
      "name": "hello",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "bin": {"hello": "hello.js"},

      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "ISC"
    }
```


5. 执行命令`npm link`;

6. 命令行输入`hello`可看到效果 ——————123;



####  <a id='a1'>yargs</a>
yargs所实现的功能是可以根据用户命令行输入选项参数的不同而达到改变node环境变量修改全局变量global，从而实现个性定制的功能
```js
//index.js
const argv = require('yargs').argv;
    if (argv.l == 'zh-cn') {
        console.log('Chinese site!')
    } else if (argv.l == 'en') {
        console.log('English site!')
    }
//命令行
node yangs.js --l=zh-cn                        //Chinese site!
node yangs.js --l=en                          //English site!

```


#### <a id='a3'>Commander</a>
生成自定义命令里将文件的启动转换为一个自定义命令,而commander则可以在自定义命令基础上做命令的扩展(带参数等);
1.  API
整体代码自上到下执行，如果没有碰到parse，则其前面的options不会触发，所以要注意`process.xx`的写法。
	 - version('0.0.1')    版本号;
	 - usage('zhao') 名字
	 - description('hello ,I\'m zhao')           描述
	 - allowUnknownOption 取消接收到未定义option时报错的机制，不报错;
	 - command('ab')        定义子命令;
	 - alias('a')           定义子命令的短命令;
	 - option('-p, --peppers','Add oeooers')     自定义选项参数和描述
	 - action(cb)           回调
	 - parse(process.argv); 至于末尾，解析命令行输入的命令;

2.  总结
 我在command,action和option,program.xx这两个组合里绕了很多弯路,总结如下

 ``` js
	#!/usr/bin/env node

	'use strict';

	const program = require('commander');

	program
	    .version('0.0.1')
	    .usage('例子')
	    .description('this is a lizi of commander')

	program
	    .command('hello [st]')
	    .action(function(st,value){
	        hello(st,value);
	    })

	function hello(val,o){
	    console.log(val);
	    console.log(1);
	    console.log(o)
	}

	program
	    .option('-s --save [value]','保存')

	program.parse(process.argv);

	if (program.save){
	    console.log(program.save);
	}

 ```
	* 保持两个组合各自独立,command/action组合,option/program.xx组合,
命令行中不能同时出现command子命令和option选项,即`lizi hello 23 -s 25`是错误的;
	*  当尝试`lizi -s 23`在命令行输出true而非值的时候，是没有在长选项后跟上`[xx]`;
	* `program.s`可能会有三种情况出现,一是当输入其他可选项的时候，当尝试`lizi -t (xx)`时,`program.s`为`undefined`;二是当输入`lizi -s`时,`program.s`为默认值,不设置默认值则为true;三是当输入`lizi -s xx`时,`program.s `为xx;


####  <a id='a4'>两个完整例子</a>
注意:写好下面代码在执行前需要`npm link` 绑定关系;

例子1: yargs和生成自定义命令的组合
```js
//package.json
    {
      "name": "lizi",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "bin": {
        "lizi1":"lizi1.js"
      },
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "ISC",
      "dependencies": {
        "commander": "^2.9.0"
      }
    }

//lizi1.js
    #!/usr/bin/env node

    'use strict';

    console.log(1);

    const argv = require('yargs').argv;

    if (argv.l == 'zh-cn') {
        console.log('Chinese site!')
    } else if (argv.l == 'en') {
        console.log('English site!')
    }

```

例子2: commander和生成自定义命令的组合
```js
//package.json
    {
      "name": "lizi",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "bin": {
        "lizi":"lizi.js"
      },
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "ISC",
      "dependencies": {
        "commander": "^2.9.0"
      }
    }


//lizi.js

#!/usr/bin/env node

'use strict';

const program = require('commander');

program
    .version('0.0.1')
    .usage('例子')
    .description('this is a lizi of commander')

program
    .command('hello [st]')
    .action(function(st,value){
        hello(st,value);
    })

function hello(val,o){
    console.log(val);
    console.log(1);
    console.log(o)
}

program
    .option('-f --flag [value]','保存','ha')
    .option('-t --tale [value]','保存')

program.parse(process.argv);

if (program.flag){
    global.flag = program.flag;
}

console.log(global.flag);

```