let form1 = document.forms[0]
console.log(form1.children) // - получает теги здесь будут лэйблы
console.log(form1.elements) // - получает элементы формы (лэйблов не будет)

// function formSubmit(e){
//     let form1 = document.forms[0]
//     let login = form1.elements[0].value
//     if(login.length<=6){
//         return false
//     }
//     else{
//         return true
//     }
// }
//     console.log(form1.elements[1].value)
//     // e.preventDefault()
//     return false
// }

// document.forms[0].addEventListener("submit", checkForm)

// function checkForm(event){
//     event.preventDefault()
//     let login = document.forms[0].elements[0].value
//     if(login.length<=6){
//         alert("Логин слишком короткий")
//     }
//     else{
//         document.forms[0].submit()
//     }
// }


//регулярные выражения
//D - не цифра
//d - цифра
//s - пробел
//S - не пробел
//w - любой допустимый символ

// let regExp = /\D/
// console.log(regExp.test("lhfgbhbgbgr"))
// console.log(regExp.test("132q534w75"))
// console.log(regExp.test("13245668"))

//прорверка на заглавные буквы

// let regExp = /[A-Z]/

// let regExp = /\d+/ - один и более раз
// let regExp = /\d?/ - есть или нет 0 или 1
// let regExp = /\d*/ - 0 или сколько угодно раз
// let regExp = /\d{2,7}/ - от 2 до 7 цифр


// let str = "https://www.google.com"
// let number = "+79538586873"
// let strTemplate = /^\+\d{11}$/
// ^ - начало строки
// [^] - означает не
// $ - конец строки
// {12} - количество символов
// console.log(strTemplate.test(number))


// let nameTamplate = /^[A-Z]{1}[a-z]{3,}$/ 
// console.log(nameTamplate.test("Vasdasd"))


//cookie
// console.log(document.cookie)
// let date = new Date(Date.now()+12*60*60*1000)
// date = date.toUTCString()

// document.cookie = "name=Kate;path=/;max-age=3600;expires="+date

// let uName = "Dima"
// document.cookie = "name=" +encodeURIComponent(uName) +"max-age=3600"


document.forms[0].addEventListener("submit", checkForm)

function checkForm(e){
    e.preventDefault()
    let login = document.forms[0].elements[0].value
    let pass = document.forms[0].elements[1].value
    document.cookie = "name="+encodeURIComponent(login)+";max-age=3600"
    document.cookie = "pass="+encodeURIComponent(pass)+";max-age=3600"
    // alert(document.cookie)
    window.location.href = "homepage.html"
}
