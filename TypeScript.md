
### TypeError: Cannot read property 'xxx' of undefined
+ **原因**：通常容易出现在a.b.c的场景下
例如：
```js
const res = {
  'data':{
    'body':{
      'user':{
        'message':'message'
      }
    }
  },
}

console.log(res.body.user); // Uncaught TypeError: Cannot read property 'user' of undefined
```
通常js的解决办法
```js
const res = res.data && res.data.body && res.data.body.message || '';
```
未来可能的js的解决办法:
```js
const res = res.data?.body?.message || '';
```
8月1号 [ Optional Chaining proposal](https://tc39.es/proposal-optional-chaining/)已经进入stage 3阶段，不出意外的话，未来会作为ECMAScript的新规范出现

```ts
interface Respons{
  data:{
    body: {
      user:{
        message:string
      }
    }
  },
}

let res:Respons = {
  data:{
    body:{
      user:{
        message: 'send message'
      }
    }
  }
}
console.log(res.user.message);  // Property 'user' does not exist on type 'Respons'

```


###【TypeError: ‘undefined’ is not an object(Safari) | Uncaught TypeError: Cannot read property 'xxx' of undefined】 | 【 TypeError: null is not an object(Safari) |Uncaught TypeError: Cannot read property 'xxx' of null 】
+ **原因**：当读取或调用一个值为undefined或null对象的属性或方法时
```js
var testArr = undefined;
console.log(testArr.length);

var testArr = null;
console.log(testArr.length);
```



### TypeError: Object doesn’t support property(IE) | TypeError: ‘undefined’ is not a function
+ **原因**：当调用一个未定义的方法时
```js
const onClick = (e) => console.log(`(${e.clientX}, ${e.clientY})`);
window.document.addEventListener('click',function(){
  this.onClick();
})

// Uncaught TypeError: this.onClick is not a function
```

```ts
const onClick = (e: MouseEvent) =>
  console.log(`(${e.clientX}, ${e.clientY})`);

window.addEventListener('click',function():void{
  this.onClick();
});

// Property 'onClick' does not exist on type 'Window'
```


### TypeError: Cannot read property ‘length’ of undefined
+ **原因**：读取一个非数组或字符串类型变量的length属性
```js
var testArray= ["Test"];

function testFunction(testArray) {
    for (var i = 0; i < testArray.length; i++) {
      console.log(testArray[i]);
    }
}

testFunction(); // Uncaught TypeError: Cannot read property 'length' of undefined
```

```ts
var testArray:string[] = ["Test"];

function testFunction(testArray:Array<String>):void {
    for (var i = 0; i < testArray.length; i++) {
      console.log(testArray[i]);
    }
}

testFunction();  // Expected 1 arguments, but got 0.
```



### TypeError: [Cannot set property 'xxx' of undefined | Cannot read property 'xxx' of undefined]
+ **原因**：试图给一个undefined变量添加属性或读取属性时
```js
var test = undefined;

test.value = 'str';  // Uncaught TypeError: Cannot set property 'value' of undefined 
console.log(test.value);  // Uncaught TypeError: Cannot read property 'value' of undefined
```

```ts
var test: undefined = undefined;
test.value = 'str';  // Object is possibly 'undefined'

console.log(test.value);  // Object is possibly 'undefined'
```


### ReferenceError：'xxx' is not defined
+ **原因**：调用未定义的变量

```js
function bar(){
  var foo;
}

console.log(foo); // Uncaught ReferenceError: foo is not defined

```

```ts
function bar():void{
  var foo:null;
}
console.log(foo);  // Cannot find name 'foo'
```


**参考链接：**
+ [top-10-javascript-errors](https://rollbar.com/blog/top-10-javascript-errors/)
+ [typescript](http://www.typescriptlang.org/docs/home.html)