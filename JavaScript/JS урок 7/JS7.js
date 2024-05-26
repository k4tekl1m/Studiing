// function stringLenght(){
//     let str1 = prompt("Введите первое слово")
//     let str2 = prompt("Введите второе слово")
//     if(str1.length > str2.length){
//         alert("1")
//         // return 1
//     }
//     if(str1.length < str2.length){
//         alert("-1")
//         // return -1
//     }
//     if(str1.length == str2.length){
//         alert("0")
//         // return 0
//     }
// }
// stringLenght()


// function upperString(){
//     let string = prompt("Введите слово в нижнем регистре")
//     alert(string[0].toUpperCase() +
//         string.substring(1));
// }
// upperString()


// function searchVowel(){
//     let count = 0
//     let vowel = ["а", "е", "ё", "и", "о", "у", "э", "ю", "я", "ы", "a", "e", "i", "o", "y", "u"]
//     let sentence = prompt("Введите предложение")
//     for(let i = 1; i <= sentence.length; i++){
//         if (vowel.indexOf(sentence[i])!=-1){
//             count++
//         }
//     }
//     alert(count)
// }
// searchVowel()


function checkSpam(){
    let spam = ["100% бесплатно", "увеличение продаж", "только сегодня", "не удаляйте", "ххх", "xxx"]
    let massage = spam.includes(prompt("Введите текст письма").toLowerCase()) 
    alert(massage)
}
checkSpam()


// nav.addEventListener("click", function(){
//     nav.style.left = 0
// })
// nav.addEventListener("mouseleave", function(){
//     nav.style.left = "-270px"
// })
// nav.addEventListener("contextmenu", function(){
//     nav.style.backgroundColor = "red"
//     nav.style.transition = "1s"
//     e.preventDeafault()
// })


