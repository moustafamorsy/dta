
let store =  [3, 1, 7, 9 ]

let store1 = [2, 4, 1, 9, 3]


// ignore all ducplication and add all the unique value 

let all_store = [...store , ...store1]

 
const addunique = arr => {
   let sum = 0;
   for(let i = 0; i < arr.length; i++){
      if(arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])){
         sum += arr[i];

      };
   };
   return sum;
};
console.log(addunique(all_store));
   
// add only duplicate values


 
const aaddunique = arr => {
   let sum = 0;
   for(let i = 0; i < arr.length; i++){
      if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])){
         sum += arr[i];

      };
   };
   return sum;
};
console.log(aaddunique(all_store));