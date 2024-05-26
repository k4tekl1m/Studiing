// циклы - часть кода кот может вып несколько раз или пока не получится итог
counter = 0
while(counter<10){
    console.log(counter)//0 1
    counter++//1
}
console.log("это все")
// ->
// 10% prompt 1.000.000
// currentMoney = +prompt ("сколько денег вносим?")
// year = 0
// while(currentMoney<1e6){
//     year++
//     currentMoney += currentMoney*0.1
// }
// console.log("Вы накопили лям за "+year+" лет")



//do while

// do {
//     //действие

// }while(условие)

// num1 = Math.round (Math.random()*10);//9
// do{
//     num2 = Math.round (Math.random()*10);//9
// }while(num1==num2)
// console.log(num1+ ","+num2)
//while - пока



//for
// в скобках
// 1 - переменная
// 2 - условие
// 3 - действие шаг
// for(i=0;i<10;i++){
//     console.log(i)
// }

// num1 = +prompt("Введите первое число")//10
// num2 = +prompt("Введите второе число")//20
// //нужно посчитать сколько четных чисел между ними
// counter = 0
// for (i=num1;i<num2;i++){
//     if(i%2==0){
//         counter++
//     }
// }
// console.log("Четных чисел: "+counter)


// count = +prompt("Сколько раз?")
// i=0 //0
// while(i<count){
//     console.log("#")
//     i++
// }

// size = +prompt("от скольки")
// i=size
// while(i>0){
//     console.log(i)
//     i--
// }

// num = +prompt("Введите число")//2
// step = +prompt("Введите степень")//2
// i = num
// while(step>1){
//     i*=num
//     step--
// }
// console.log(i)

// num1 = +prompt("Введите число")
// num2 = +prompt("Введите степень")
// while (num1 != 0 && num2 != 0) {
//     if (num1 > num2) {
//         num1 = num1 % num2;
//     } else {
//         num2 = num2 % num1;
//     };
// };

// console.log(num1 + num2)


//посчитать факториал введенного пользователем числа
// num = +prompt("Введите число")
// i=1
// res=1
// while(i<=num){
//     res*=i
//     i++
// }
// console.log(res)


// do{
//   num = prompt("Решите пример 2+2*2")
// }while(num!=6)


// num = 1000
// counter = 0
// do{
//     num/=2
//     counter++
// }while(num>50)
// console.log("Попыток"+counter)

//Вывести все числа от 1 до 100, которые кратны указанному пользователем числу.
// num = +prompt("Введите число")
// for(i=1;i<100;i++){
//     if(i%num==0){
//         console.log(i)
//     }
// }

//Вывести каждый 4-й элемент из указанного пользователем диапазона. Пользователь указывает минимальное и максимальное значения диапазона.
// min = +prompt("Введите min число")
// max = +prompt("Введите max число")
// for(i=1;i<max;i+=4){
//     if(min<i){
//         console.log(i)
//     }
// }

//Запросить число и проверить, простое ли оно. Простое число делится без остатка только на само себя и на 1.

num =+prompt("Введите число")
isSimple = "простое"
for(i=2;i<num;i++){
    if(num%i==0){
        isSimple = "непростое"
    }
}
console.log("Ваше число "+ isSimple)






//for
// в скобках
// 1 - переменная
// 2 - условие
// 3 - действие шаг
// for(i=0;i<10;i++){
//     console.log(i)
// }

// num1 = +prompt("Введите первое число")//10
// num2 = +prompt("Введите второе число")//20
// //нужно посчитать сколько четных чисел между ними
// counter = 0
// for (i=num1;i<num2;i++){
//     if(i%2==0){
//         counter++
//     }
// }
// console.log("Четных чисел: "+counter)