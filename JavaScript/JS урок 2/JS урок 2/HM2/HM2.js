//1
// a = +prompt('Введите меньшее число')
// b = +prompt('Введите большее число')
// c = 0
// while (a<=b) {
//     c+=a
//     a++
// }
// console.log(c)


//2
// a = +prompt('Введите первое число')
// b = +prompt('Введите второе число')
// c=0
// if (a<b){
//     for(let i =1;i<=a;i++){
//         if(a%i==0&&b%i==0){
//         c=i
//         }
//     }
// }
// else {
//     for(let i =1;i<=b;i++){
//         if(b%i==0&&a%i==0){
//         c=i
//         }
//     }
// }
// console.log(c)


//3
// a = +prompt('Введите число')
// for(let i = 1;i<=a;i++){
//     if(a%i==0){
//         console.log(i)
//     }
// }


//4
// let num = prompt('Введите число')
// let count = 0
// for(let i=0;i<num.length; i++){
//     count += 1
// }
// console.log(count)


//5
// let pluss = 0
// let minus = 0
// let even = 0
// let odd = 0
// let zero = 0

// for(let i=1;i<=10; i++){
//     let num = prompt('Введите число')
//     if (num>0){
//         pluss++
//     }
//     if (num<0){
//         minus++
//     }
//     if(num%2==0){
//         even++
//     }
//     if(num%2!==0){
//         odd++
//     }
//     if(num ==0){
//         zero++
//     }
// }
// console.log("Четных "+even+" Нечетных "+ odd +" Положительных "+ pluss + " Отрицательных "+ minus + " Нулей "+ zero)



//6
// do{
    // let num1 = +prompt('Введите первое число')
    // let num2 = +prompt('Введите второе число')
    // let action = prompt('Введите какую операцию необходимо произвести: +, -, *, /')
    // let answer = 0
//     if(action=="+"){
//         answer = num1 + num2
//     }
//     if(action=="-"){
//         answer = num1 - num2
//     }
//     if(action=="*"){
//         answer = num1 * num2
//     }
//     if(action=="/"){
//         answer = num1 / num2
//     }
//     console.log("Результат "+ answer)
// }while (confirm(' Решить еще один пример?'))


//7
// do {
//     let num = prompt(' Введите число', '1234567890');
//     let volume = Number( prompt(' На сколько цифр сдвинуть?') );
//     alert(num.slice(volume) + num.slice(0, volume));

// } while (confirm(' Еще одно число ?'));



//8
// answer = 0
// const days = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
// let i = 0
// let currDay
// do{
//     currDay = confirm("День недели " + days[i] + ". Хотите увидеть следующий день недели?")
//     i++
//     if(i===days.length){
//         i=0
//     }
//     }
// while (currDay)


//9
// for(let i=2; i<=9; i++){
//     for(let j=1; j<=10; j++){
//         console.log(i*j)
//     }
// }


//10
// let guessedNum = Number(alert("Загадайте число от 1 до 100"));
// let lowerLimit = 0;
// let upperLimit = 100;
// let N = 50;

// while (guessedNum !== N ) {
//     let answer = prompt(`Ваше число >, <, или равно N`, '>, <, =');
//     if (answer == '>') {
//         lowerLimit = N;
//         N = Math.ceil((upperLimit - lowerLimit) / 2 + lowerLimit);
//     } else if (answer == '<') {
//         upperLimit = N; 
//         N = Math.ceil((upperLimit - lowerLimit) / 2 + lowerLimit);
//     } else {
//         break;
//     };
// };
// alert(`Задуманное число ${N}`);
