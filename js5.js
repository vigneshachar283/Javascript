// function count(str){
//     let count=0;
//     for(const char of str){
//         if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u"){
//           count ++;
//         }
       
//     }
//      return count;

// }

// console.log(count("hello"));

let arr=[1,2,3,4];

let evenArr = arr.filter((val)=>
{
  return val%2==0;

});
console.log(evenArr);