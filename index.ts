const plusOne = (x:number) => x + 1
const arr : readonly [string,number,string,number] = ['1',2,'3',4];

console.log(`1 + 1 = ${plusOne(1)}`)

// // eg: 1
// type Respons = {
//   data:{
//     body: {
//       user:{
//         message:string
//       }
//     }
//   },
// }

// let res:Respons = {
//   data:{
//     body:{
//       user:{
//         message: 'send message'
//       }
//     }
//   }
// }
// console.log(res.user.message); 


// // eg: 2
// var flag:boolean = undefined;
// flag.length; 

// var flag:boolean = null;
// flag.length; 




// // eg: 3
// const onClick = (e: MouseEvent) =>
//   console.log(`(${e.clientX}, ${e.clientY})`);

// window.addEventListener('click',function():void{
//   this.onClick();
// });

// // Property 'onClick' does not exist on type 'Window'



// // eg: 4
// var testArray:string[] = ["Test"];

// function testFunction(testArray:Array<String>):void {
//     for (var i = 0; i < testArray.length; i++) {
//       console.log(testArray[i]);
//     }
// }

// testFunction();  // Expected 1 arguments, but got 0.




// // eg: 5
// const arr = ['q', 'w', 2, '3'] as const; 
// arr[0] = '1'; // Cannot assign to '0' because it is a read-only property



// // eg: 6
// var test: undefined = undefined;
// test.value = 'str';  // Object is possibly 'undefined'

// console.log(test.value); // Object is possibly 'undefined'



// // eg: 7
// const arr1: readonly [string, string, number, string] = ['I', 'l', 4, '514']

// arr1[0] = 1; //Cannot assign to '0' because it is a read-only property