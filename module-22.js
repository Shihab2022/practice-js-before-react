/************************  find unique names from an array by function************************* */

// const names=['shihab','nahid','shamsujjaman','kafi','shiraj','mamun','thohrul','shamsujjaman','kafi','faruk','shifa','shihab','nahid']
// function removeDublicate(names){
//     const unique= []
//     for(const name of names){
//         if(unique.indexOf(name) ==-1){
//             unique.push(name)
//         }
//     }
//     return unique;
// }
// console.log(removeDublicate(names))


/************************  string length ************************* */
// const myString = 'assalamu alikum'
// console.log(myString.length)
// console.log(myString[10])
// console.log(myString[11])


/************************  reverse a string************************* */
// const myStrign ='hello i am shihab'
// function reverseString (allText){
//     let reverse ='';
//     for(const text of allText ){
//         reverse=text+reverse;
//     }
//     return reverse;
// }

// console.log(reverseString(myStrign))

/************************  for nasted onbject ************************* */

const phones =[
    {name:'samsung' ,price:25500 ,color:'black' , model:'m25'},
    {name:'iphone' ,price:255000 ,color:'gaygreen' , model:'iohone 13pro'},
    {name:'mi' ,price:5500 ,color:'black' , model:'note 10'},
    {name:'oppo' ,price:20500 ,color:'white' , model:'m25'},
    {name:'walton' ,price:25000 ,color:'black' , model:'m25'},
    {name:'realme' ,price:50500 ,color:'green' , model:'m25'},
]

/************************  find chepest phone from nasted object ************************* */
// let chepest = phones[0]
// for(const phone of phones){
//     if(phone.price <chepest.price){
//         chepest=phone
//     }
// }
// console.log(chepest)

/************************  if i buy all phone then my cost ************************* */
// let cost =0;
// for(const phone of phones){
//     cost =cost + phone.price
// }
// console.log(cost)

/************************  if i want to see all phone name ************************* */

// for(const phone of phones){
//     console.log(phone.name)
// }