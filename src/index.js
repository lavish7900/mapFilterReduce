


       //Map -Create a new array by doing something with each item in an array.

      //  var numbers = [3, 56, 2, 48, 5];
// function double(x){
//   return x*3;
// }
// const dbnum = numbers.map(double);
// console.log(dbnum);


       //Filter - Create a new array by keeping the items that return true.
// mthd1
// function compare(x){
//   return x>=5;
// }
// console.log(numbers.filter(compare))

// mathd2
// console.log(numbers.filter(function (x){
//   return x<5;
// }))
        //Reduce - Accumulate a value by doing something to each item in an array.


// var newno = numbers.reduce(function(accumulator,currentNumber) {
// console.log(accumulator +"= acc");
// console.log(currentNumber + " = cur");
//   return accumulator + currentNumber;

// });
// console.log(newno);

      //Find - find the first item that matches from an array.

//  const ans= numbers.find(function(num){

//   return num>23; 
// })
// console.log(ans);

       //FindIndex - find the index of the first item that matches.

// const ans= numbers.findIndex(function(num){

//     return num>23; 
//   })
//   console.log(ans);

                // challenge  
 import emojipedia from "./emojipedia";
 const out = emojipedia.map(function(emoji){
return ((emoji.meaning).substring(0,100));
 })               
 console.log(out);

