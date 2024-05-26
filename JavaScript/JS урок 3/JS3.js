// function myFunc(аргументы){
//     действие1
//     действие2
//     действие3
// }
// function sum(x,y){
//     alert(x+y)
// }
// sum(10,20)

// function hello(){
//     alert("Привет!")
// }
// hello()

// function showFiveBlocks(){
//     for(i=0;i<5;i++){
//         // document.write("<h2>Блок</h2>")
//         out.innerHTML += "<h1>Привет</h1>"
//     }
// }
// showFiveBlocks()

// // retern - результат функции

// function cube(x){
//     retern x*x*x
// }
// function asd(x){
//     retern x*x*
// }
// y = cube(5)+asd(5)
// alert(y)


// function bankerRoud(number){
//     if(Math.round(number)%2==0){
//         return Math.round(number)
//     }
//     else{
//         if(number<Math.round(number)){
//             return Math.round(number)-1
//         }else{
//             return Math.round(number)+1
//         }
//     }
// }
// result = bankerRoud(6.2)
// alert(result)



// function sayError(){
//     alert("Some error occurred!")
// }
// sayError()


// function showError(x){
//     alert ("Error " + x + " occured!")
// }
// showError("404")

// function createHeaders(N){
//     for(i=1;i<=N;i++){
//         out.innerHTML += "<h2>Header " + i +"</h2>"
//     }
// }
// createHeaders(5)


// function checkPassword(x){
//     if(x== "Step" || x== "Web" || x== "JavaScript"){
//         return true
//     }else{
//         return false
//     }
// }
// result = checkPassword("step")
// alert (result)




// function sign(x){
//     if(x<0){
//         return "-1"
//     }
//     if(x==0){
//         return "0"
//     }
//     if(x>0){
//         return "1"
//     }
// }
// result = sign("-5")
// alert (result)


// function dayOfWeek(x){
//     if(x==0){
//         return "Sunday"
//     }
//     if(x==1){
//         return "Monday"
//     }
//     if(x==2){
//         return "Tuesday"
//     }
//     if(x==3){
//         return "Wednesday"
//     }
//     if(x==4){
//         return "Thursday"
//     }
//     if(x==5){
//         return "Friday"
//     }
//     if(x==6){
//         return "Saturday"
//     }
// }
// result = dayOfWeek("0")
// alert (result)


//как можно было сделать
// function asd(x){
//     switch(x){
//         case 1: return "Понедельник";
//         case 2: return "Вторник";
//         case 3: return "Среда";
//         case 4: return "Четверг";
//         case 5: return "Пятница";
//         case 6: return "Суббота";
//         case 7: return "Воскресенье";
//    }
// }
// asd(5)



// let i=0
// for(i=0;i<5;i++){
//     действие
// }
// alert(i)

// let - для переменных у которых ограничена видимость

// let num = 5
// for (let i = 0; i<5; i++){
//     let asd = 5
// }
// alert (asd)


function anyNumbers(){
    // arguments
    for (let i=0;i<arguments.length;i++){
        console.log(arguments[i])
    }
}
anyNumbers(5,6,7,8,9,0)



function showMax(){
    let max = arguments[0]
    for (let i=0;i<arguments.length;i++){
        if(arguments[i]>max){
            max = arguments[i]
        }
    }
    return max
}
let res = max(10,20,30,40)
































//3
// let a = +prompt("Введите число")
// for(let i=1;i<=a;i++){
//     if(a%i==0){
//         console.log(i)        
//     }
// }


// let a = +prompt("Введите число")
// c=0
// for(let i=1;i<=a;i++){
//     if(a%i==0){
//         c+=i
//     }
// }
// console.log(c)      