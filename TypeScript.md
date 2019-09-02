
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

+ **使用ts**
```ts

interface Respons {
  data:{
    body: {
      user:{
        message:string,
        hit:string|number
      }
    }
  },
} 

//  or
/*   
type Respons = {
  data:{
    body: {
      user:{
        message:string,
        hit:string|number
      }
    }
  },
} */

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

#### tips

##### type vs interface
+ [Typescript: Interfaces vs Types](https://stackoverflow.com/questions/37233735/typescript-interfaces-vs-types)
+ [Interfaces vs. Type Aliases](https://www.typescriptlang.org/docs/handbook/advanced-types.html#interfaces-vs-type-aliases)

#### 使用哪个
 > you should always use an interface over a type alias if possible.

 > if you can’t express some shape with an interface and you need to use a union or tuple type, type aliases are usually the way to go


### TypeError: ‘undefined’ is not an object(Safari) | Uncaught TypeError: Cannot read property 'xxx' of undefined 
### TypeError: null is not an object(Safari) | Uncaught TypeError: Cannot read property 'xxx' of null 
+ **原因**：当读取或调用一个值为undefined或null对象的属性或方法时
```js
var flag = undefined;
console.log(flag.length); // Uncaught TypeError: Cannot read property 'length' of undefined

var flag = null;
console.log(flag.length); // Uncaught TypeError: Cannot read property 'length' of null
```

+ **使用ts**
```ts
var flag:boolean = undefined;
flag.length;  // Property 'length' does not exist on type 'boolean'

var flag:boolean = null;
flag.length;  // Property 'length' does not exist on type 'boolean'

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

+ **使用ts**
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

+ **使用ts**
```ts
var testArray:string[] = ["Test"];

function testFunction(testArray:Array<String>):void {
    for (var i = 0; i < testArray.length; i++) {
      console.log(testArray[i]);
    }
}

testFunction();  // Expected 1 arguments, but got 0.
```
#### tips
关于数组和元组

##### 元组
+ 元组是一个描述定长数组的类型，各项内容的类型可不同 
+ 元组是定长的，所以不同长度的元组是不兼容的【ts2.7引入】具体解释:[fixed-length-tuples](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#fixed-length-tuples)

```js
// js
const arr = ['q', 'w', 2, '3']
```
```ts
// ts
const arr: [string, string, number, string] = ['q', 'w', 2, '3']

// 加readonly修饰符，保证数据只可读 如果没有修改需求 尽可能的加上readonly
const arr: readonly [string, string, number, string] = ['q', 'w', 2, '3']

// 多利用类型推断，代码更加简洁清晰 [Const contexts for literal expressions](https://github.com/Microsoft/TypeScript/pull/29510)
const arr = ['q', 'w', 2, '3'] as const; 
arr[0] = '1'; // Cannot assign to '0' because it is a read-only property
```
##### 数组
+ 数组是一个变长的。每项内容类型都相同的列表
```ts
const foo: Array<number> = [1, 2, 3];
// 或者
const foo: []<number> = [1, 2, 3];
```

##### 类型别名
> A type alias declaration introduces a type alias in the containing declaration space.


### TypeError: [Cannot set property 'xxx' of undefined | Cannot read property 'xxx' of undefined]
+ **原因**：试图给一个undefined变量添加属性或读取属性时
```js
var test = undefined;

test.value = 'str';  // Uncaught TypeError: Cannot set property 'value' of undefined 
console.log(test.value);  // Uncaught TypeError: Cannot read property 'value' of undefined
```

+ **使用ts**
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
+ **使用ts**
```ts
function bar():void{
  var foo:null;
}
console.log(foo);  // Cannot find name 'foo'
```


**参考链接：**
+ [top-10-javascript-errors](https://rollbar.com/blog/top-10-javascript-errors/)
+ [typescript](http://www.typescriptlang.org/docs/home.html)