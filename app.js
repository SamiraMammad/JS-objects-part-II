
// task 1

// const student ={
//     name : "David Rayy",
//     sclass : "VI",
//     age : 12
// }
// for (const a in student) {
//     delete student[a]
// }
// const newarray={};
// console.log(student);
// let find = Object.setPrototypeOf(newarray, student);
// console.log(find);



// task 2
// Number.prototype.add = function(num){
//    return this + num
// }
// Number.prototype.substract = function(num){
//     return this- num
//  }
//  Number.prototype.divide = function(num){
//     return this / num
//  }
//  Number.prototype.multiply = function(num){
//     return this * num
//  }
// console.log((5).add(4).substract(3).divide(2).multiply(10));




// task 3
// let arrayLikeObject={
//     length:0,

//     push:function(item){
//         this[this.length]=item;
//         this.length++;
        
//     },
//     pop:function(){
//         if(this.length===0)return undefined;
//         this.length--;
//         delete this[this.length]
//     }
// }

// arrayLikeObject.push("first");
// arrayLikeObject.push("second");
// arrayLikeObject.push("second");

// console.log(arrayLikeObject);
