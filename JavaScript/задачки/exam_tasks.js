//1
// let n = prompt('Введите число')
// let arr = []
// function checkNum(){
//     for (let i = 1; i < n; i++) {
//         if(i%2!==0){
//         arr.push(i)
//         }        
//     }
//     console.log(arr.length)
// }
// checkNum()
//2
// let arr = ['code', 'codewars', 'flick', 'wars', 'jscode']

// function flickSwitch(arr) {
//     let True = true    
//     return arr.map(item=>{
//       if(item==='flick'){
//         True = !True
//       }
//       return True
//     })
// }


// function doubleEveryOther(){
//     let arrNums = [1,2,3,4]
//     for (let i = 0; i < arrNums.length; i++) {
//         if(arrNums[i]%2==0){
//             arrNums[i] *= 2
//         }
//     }
//     console.log(arrNums)
// }
// doubleEveryOther()


let array = [1,2,3,4,5]
let newArray = []

array.forEach((item) => {
    if(item%2==0){
        newArray.push(item * 2)
    }else{
        newArray.push(item)
    }
})
console.log(array)
console.log(newArray)


let agesFamily = [12,6,3,40,30]
let sortFamily = agesFamily.toSorted((a, b) => a - b)

console.log(sortFamily)