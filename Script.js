
let store =  [3, 1, 7, 9]

let store1 = [2, 4, 1, 9, 3]


// remove all ducplication and add all the unique value 

let all_store = [...store , ...store1]

 
   let mw =  all_store.filter((item,
        index) => all_store.indexOf(item) === index);
       
var count = 0 ;

mw.forEach(element => {
  
     count = count + element ;
  });
  console.log(count); 

   
// add only duplicate values


 var counts = 0 ;

for (let i = 0; i < store.length; i++) {
   for (let j = 0; j < store1.length; j++) {

   if (store[i] === store1[j]) {

    var counts = counts + store[i] + store1[j] ;
   
   } 

   }
   

}

console.log(counts);