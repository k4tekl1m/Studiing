//1


//2
// let arr = [5,4,3,2,1]
// let newArray = []
// function smaller(){
//     for (let i = 0; i < arr.length; i++) {
//         let count = 0
//     for (let k = 0; k < arr.length; k++) {
//         if(arr[i]>arr[i+k]){
//             count +=1           
//         }        
//     }
//     newArray.push(count)        
//     }                 
// }
// console.log(newArray)    
// smaller(arr)


//3
// let array = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// snail = function(array) {
//     const { length } = array;
//     const result = [];
//     let x = 0;
//     let y = 0;
//     let n = length;  
//     while (n > 0) {
//       for (let i = x; i < x + n; i++) result.push(array[y][i]);
//       n--; y++;
//       for (let i = y; i < y + n; i++) result.push(array[i][x + n]);
//       for (let i = x + n - 1; i >= x; i--) result.push(array[y + n - 1][i]);
//       n--;
//       for (let i = y + n - 1; i >= y; i--) result.push(array[i][x]);
//       x++;
//     }
//     return result;
// }  
// console.log(snail(array));
// console.log(array[0][1])
// array[0][0]
// array[0][1]
// array[0][2]
// array[1][2]
// array[2][2]
// array[2][1]
// array[2][0]


//4

let str 
    function permute(str) {
    arr=[...str]
    const result = [];
    const swap = (a, i, j) => ([a[i], a[j]] = [a[j], a[i]]);
    const generate = (k, heapArr) => {
      if (k === 1) {
        result.push(heapArr.slice());
        return;
      }
      generate(k - 1, heapArr);
      for (let i = 0; i < k - 1; i++) {
        swap(heapArr, k % 2 ? 0 : i, k - 1);
        generate(k - 1, heapArr);
      }
    };
    generate(arr.length, arr.slice());
    return result;
  }
  
console.log(permute('abbs'));



