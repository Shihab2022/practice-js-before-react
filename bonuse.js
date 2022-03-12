
/************************ unlimited vaby akta function kay chality chai taholay************************* */

// function sumUnlimeted(num){ //fun ta unlimeted vaby cholty thakby akta somy ak aka of hoay jabby
   
//     let sum =num+1
//     console.log(sum)
//     sumUnlimeted(sum)
   
// }
// sumUnlimeted(2)

/************************ akta nirdisto man por jonto chai  taholay************************* */
//  function sumUnlimeted(num){
   
//         let sum =num+1
//         if(sum >200){
//             return;
//         }
//         console.log(sum)
//         sumUnlimeted(sum)
       
//     }
//     sumUnlimeted(0)


// function sum(i){
//     // console.log(i)
//     if(i==1){
//         return 1 ;

//     }
//     return i+sum(--i)
// }
// console.log(sum(5))


/************************ facktorial ************************* */

function factorial(i){
if(i==1){
    return 1 ;
}
return i*factorial(--i)
}
console.log(factorial(5))
console.log(factorial(10))
