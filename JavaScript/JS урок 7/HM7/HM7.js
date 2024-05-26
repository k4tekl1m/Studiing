//1
// const str = "sdfASfsAFgbd1232b3@b2j3b5b23hb5";
//     const sumLetters = str.match(/[a-z]/gi).join('').length;
//     const sumNumbers = str.match(/\d+/g).join('').length;
//     const sumSymbol = str.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g).join('').length;
//     console.log(sumNumbers, sumLetters, sumSymbol);


//2
// function numberToText(number){
//     let first = ["один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"]
//     let second = ["десять", "одинадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"]
//     let third = ["двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семдесят", "восемдесят", "девяносто"]
//     if(number>0 && number <10){
//         console.log(first[number-1])
//     }
//     if(number>9&& number<20){
//         console.log(second[number-10])
//     }
//     if(number>=20&& number<100){
//         let str = `${number}`
//         str = str.split('')
//         let firstNumber = str[0];
//         let secondNumber = str[1];
//         console.log(`${third[firstNumber - 2]} ${first[secondNumber - 1]}`)
//     }
// }

// numberToText(15)
// numberToText(37)
// numberToText(8)

//3
// function flipCase(str) {
//     var chars = str.toUpperCase().split("");
//     for (var i = 0; i < chars.length; i++) {
//       if (chars[i] == str[i])
//         chars[i] = chars[i].toLowerCase();
//     }
//     return chars.join("");
// }

// var letters = "";
// var result = flipCase(letters);
// console.log(letters);
// console.log(result);

//4
// function camelCase(){
//     let arr = ["font-size", "background-color", "text-align"]
//     for (let i = 0; i < arr.length; i++) {
//         let string = arr[i]
//         string = string.split("-", 2)//["font","size"]
//         // console.log(string)
//         let upper = string[1][0].toUpperCase()
//         let line = string[1].slice(1)
//         let result = string[0] + upper + line
//         console.log(result)
//     }
// }
// camelCase()
//5
// let str = prompt("Введите фразу") //'cascading style sheets'
//     let abb = ''
//     str = str.split(" ")//['cascading', 'style', 'sheets']
//         for (let i = 0; i < str.length; i++){
//            abb += str[i][0].toUpperCase()
    
//         }
//     alert(abb) 

//6 
// function generaLine() {
//     let n = prompt("Ввести количество строк, которое нужно добавить: ");
//     let strings = [];
//     for (let i = 1; i <= n; i++) {
//         let text = prompt("Введите строку №" + i + " : ");
//         strings.push(text);
//     }
//     function textCount(...strings) {
//         let newText = "";
//         for (let i = 0; i < strings.length; i++) {
//             let text = strings[i];
//             newText += text;
//         }
//         return newText;
//     }
//     alert(textCount(...strings));
// }
// generaLine()
 
//7
function calc(str){
    let arrStr, result; 
    if(str.includes('+')){
          arrStr = str.split('+')
          result = Number(arrStr[0]) + Number(arrStr[1]);
    }else if(str.includes('-')){
          arrStr = str.split('-')
          result = Number(arrStr[0]) - Number(arrStr[1]);
    }else if(str.includes('*')){
          arrStr = str.split('*')
          result = Number(arrStr[0]) * Number(arrStr[1]);
    }else if(str.includes('/')){
          arrStr = str.split('/')
          result = Number(arrStr[0]) / Number(arrStr[1]);
    }else{
       return 'неверное значение';
    }
    return `${str} = ${result}`;
 } 
 console.log(calc(prompt("Введите пример, в качестве операторов используйте + - * /")));

//  function calculate(){
//     let equation = prompt("Введите пример, в качестве операторов используйте + - * /")//5+6*8 ()
//     let operators = ['+', '-', '*', '/']
//     let regExp = /\D*/
//     let regExp1 = /[0-9]/
//     let regExp2 = /\d*?/
//     let primer1 = equation.split(regExp)//['5', '6', '8']
//     let primer = equation.split(regExp2)//['5', '+', '6', '*', '8']
//     // let primer = ['5', '+', '6', '*', '8']
//     for (let i = 0; i < primer.length;) { 
//         if(regExp1.test(primer[i])){
//             primer[i] = Number(primer[i])  
//             i++ 
//         }else{
//             i++
//         }   
//     }
//     //[5, '+', 6, '*', 8]
//     console.log(primer)
//     // primer2 = primer2.map(function(item){
//     //     if(item == regExp)
//     //     item = Number(item)
//     // })
//     // console.log(primer2)
//     // let arr = primer2
//     // for (let i = 0; i < arr.length; i++){
        
//     //     if(primer2[i] == '+'){
//     //         arr = arr[i-1] + arr[i+1]
//     //         // return a
//     //     }
        
//     // }
//     // console.log(primer1)
//     // console.log(primer2)

// }
// calculate()


//8
// function task8(url) {
//     let arr1;
//     let protocol;
//     let domain;
//     let arr2;
//     let way;
//     arr1 = url.split("://");
 
//     protocol = arr1[0];
//     arr2 = arr1[1].split("/");
//     domain = arr2[0];
 
//     arr2.shift();
//     way = arr2.join("/");
 
//     return "Информация\nпротокол: " + protocol
//         + "\nдомен: " + domain + "\nпуть: " + way;
// }

// //9
// var stringDelimiter = function (sampleInput, delimiter) {
//     var stringArray = [''];
//     var j = 0;

//     for (var i = 0; i < sampleInput.length; i++) {
//         if (sampleInput.charAt(i) == delimiter) {
//             j++;
//             stringArray.push('');
//         } else {
//             stringArray[j] += sampleInput.charAt(i);
//         }
//     }
//     return stringArray;
// }

// //10
// function printf(template, ...values) {
//     return template.replace(/%(\d+)/g, (str, num) => [...values][num - 1]);
//   }
// console.log(printf("Today is %1 %2.%3.%4", "Monday", 10, 8, 2020));


