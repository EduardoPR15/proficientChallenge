export let  sumArr = []
export let minArr = []
export let incrementTotal = 0
 
export let decrementTotal


export function sumTwoArrays(array, array2) {
    let suma1 = 0
   let suma2 = 0
   for (let i = 0; i < array.length; i++) {
   suma1 += array[i] 
   }
   for (let i = 0; i < array2.length; i++) {
       suma2 += array2[i] 
       }
   return suma1 + suma2
   }