//1
// function sign(a=0, b=0){
//     if(a<b){
//         return "-1"
//     }
//     if(a>b){
//         return "1"
//     }
//     if(a==b){
//         return "0"
//     }
// }
// result = sign("-5")
// alert (result)



//2
// function factorial(n){
//     result = 1;
//     while(n){
//         result *= n--;
//     }
//     return result;
// }
// console.log(factorial(5))



//3
// function num(a, b, c){
//     if(a>=0 && b>=0 && c>=0){
//         a*=100
//         b*=10
//         return (a+b+c)
//     }
// }
// result = num(6, 3, 2)
// alert(result)



//4
// function square(a, b){
//     if(b==null){
//         return (a*a)
//     }else{
//         return (a*b)
//     }
// }
// alert(square(3))


//5
// function num(x){
//     c = 0
//    for(let i=1;i<x;i++){
//     if(x%i==0){
//         c+=i
//     }
//     }
//     if(c===x){
//     alert("Число совершенно")
//     }else{
//     alert("Число не совершенно")
//     }
// }
// result = num(6)


//6
//  function range(a, b){
//      for(let x=a;x<=b;x++){
//         c = 0
//         for(let i=1;i<x;i++){
//             if(x%i==0){
//              c+=i
//         }
//         }
//         if(c===x){
//             console.log(x)
//         }        
//     }
//  }
// range(1, 1000)

//7
// function time(a, b, c){ 
//     if(a<10){
//         a = '0' + a
//     }else if(a==null){
//         a = '00'
//     }
//     if(b<10){
//         b = '0' + b
//     }else if(b==null){
//         b = '00'
//     }
//     if(c<10){
//         c = '0' + c
//     }else if(c==null){
//         c = '00'
//     }
//     console.log(a + ":" + b +":" + c)
//     if(a>24 || b>60 || c>60){
//         console.log("Ошибка, так не бывает")
//     }
// }
// result = time(5)

  

//8
// function time(a, b, c){ 
//     if(b==null){
//         b=0
//     }
//     if(c==null){
//         c=0
//     }
//     x=a*3600+b*60+c
//     console.log(x)
//     if(a>24 || b>60 || c>60){
//         console.log("Ошибка, так не бывает")
//     }
// }
// result = time(5)



//9
// function time(c){
//     let hour = Math.floor(c / 3600)
//     let min = (c - (hour*3600))/60
//     let sec = c -(hour*3600) -(min*60)
//     if(hour<10){
//         hour = "0" + hour
//     }
//     if(min<10){
//         min = "0" + min
//     }
//     if(sec<10){
//         sec = "0" + sec
//     }
//     console.log(hour + ":" + min +":" + sec)
// }
// result = time(300)



//10
// let date = (h, m = 0, s = 0, h1, m1 = 0, s1 = 0) => {
//     if (h == 0) {
//         h = 24;
//     }
//     let seconds = h * 3600 + m * 60 + s;
//     let seconds1 = h1 * 3600 + m1 * 60 + s1;
//     let differenceTime = Math.abs(seconds1 - seconds);

// function time(c){
//     let hour = Math.floor(c / 3600)
//     let min = Math.floor((c - (hour*3600))/60)
//     let sec = c -(hour*3600) -(min*60)
//     if(hour<10){
//         hour = "0" + hour
//     }
//     if(min<10){
//         min = "0" + min
//     }
//     if(sec<10){
//         sec = "0" + sec
//     }
//     console.log(hour + ":" + min +":" + sec)
// }
// return time(differenceTime)
// }
// console.log(date(10, 3, 0, 10, 10, 0));
// console.log(date(2, 9, 0, 15, 4, 10)); 