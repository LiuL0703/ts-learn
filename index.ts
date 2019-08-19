// const plusOne = (x:number) => x + 1
// const arr : readonly [string,number,string,number] = ['1',2,'3',4];

// console.log(`1 + 1 = ${plusOne(1)}`)

//  1
type Respons = {
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
console.log(res.user.message); 



// 7

const arr1: readonly [string, string, number, string] = ['I', 'l', 4, '514']

arr1[0] = 1; //Cannot assign to '0' because it is a read-only property