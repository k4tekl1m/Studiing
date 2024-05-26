//JSON
//JS object Natation
//строковый тип для передачи данных в сети и для хранения
// let person ={
//     firstname: "Andrey",
//     secondname: "",
//     age: 33,
//     contactInfo:{
//         phone: "88005553535",
//         email: "test@mail.ru"
//     },
//     disciplines:[
//         "html", "js", "php"
//     ]
// }

// let jsonString = {
//     "firstname":"Andrey",
//     "secondname":"Ivanov",
//     "age": 33,
// }

//1 метод сериализация
//2 десериализация
// let jsonString = JSON.stringify(person)
// console.log(jsonString)
// console.log(person.disciplines[1])

// let jsonString = JSON.stringify(person, checkSecondName)
// let jsonString = JSON.stringify(person, null, 4)//где 6 - количество пробелов
// // let jsonString = JSON.stringify(person, ["firstname", "age"])
// function checkSecondName(key, value){
//     if(key=="secondname"&&value.lenght<1){
//         return undefined
//     }
//     return value
// }
// console.log(jsonString)

// person["dog"] = "sharik"



// из строки в объект спарсим
// let jsonString = `{
//     "firstname": "Andrey",
//     "secondname": "",
//     "age": 33,
//     "contactInfo": {
//         "phone": "88005553535",
//         "email": "test@mail.ru"
//     },
//     "disciplines": [
//         "html",
//         "js",
//         "php"
//     ]
// }`
// let person = JSON.parse(jsonString)
// console.log(person)



// function checkAge(key, value){
//     if(key=="age"&&value<=18){
//         return undefined
//     }
//     return value
// }

//пустой объект передастся если один ключ undefinde, другой функция


// let person = {
//     firstname: "Andrey",
//     secondname: "Pupkin",
//     age: 10,
//     toJSON(){
//         let jstring =`{"firstName": "${this.firstname}", "secondName": "${this.secondname}", "age":`
//         if(this.age<=18){
//             jstring+=`"Мало"}`
//         }else{
//             jstring+= `${this.age}}`
//         }
//         return jstring
//     }
// }
// let jsonString = JSON.stringify(person)
// console.log(jsonString)
//канкотинация строк - что это


//AJAX - ассинхронный js + XML 
//ассинхронный когда результат придет от сервера тогда отобразиться
// button1.addEventListener("click", sendReq)//при нажатии на кнопку

// function sendReq(){
//     // let person = {
//     //     firstname: "Andrey",
//     //     secondname: "Pupkin",
//     //     age: 10,
//     // }
//     // let jsonString = JSON.stringify(person)
//     // console.log(jsonString)    
    
//     //ActiveXObject - исп для запроса на сервер
//     //request -объет для отправки запроса
//     let request//переменная для объекта запроса
//     if(window.XMLHttpRequest){
//         request = new XMLHttpRequest();//молодой
//     }else{
//         request = new ActiveXObject("Microsoft.XMLHTTP")//старый
//     }    
//     //test.txt - заместо сервера
//     //GET и POST - метод отправки формы
//     //onreadystatechange - щбработчик событий
//     // request.open("GET", "test.txt")//куда
//     request.open("GET", "test.json")//куда
//     request.responseType ="json"//какой тип ответа мы ожидаем
//     // request.onreadystatechange = function(){//проверяет каждую смену состояния
//     //     console.log(request.readyState)//Выводим состояние запроса
//     //     if(request.readyState==4){//если ответ пришел
//     //         // console.log(request.response)
//     //         out.innerHTML+= request.response//выводим результат
//     //     }
//     // }
//     request.onload = function(){//когда все данные подгружены с сервера к нам
//         if(request.readyState==4&&request.status == 200){
//             let person = request.response
//             console.log(person)
//         }
//     }
//     request.send()//отправляем запрос
// }

button1.addEventListener("click", sendReq)
function sendReq(){
    let request
    if(window.XMLHttpRequest){
        request = new XMLHttpRequest();
    }else{
        request = new ActiveXObject("Microsoft.XMLHTTP")
    } 
    request.open("GET", "https://jsonplaceholder.typicode.com/users")
        request.onload = function(){
            if(request.readyState==4&&request.status == 200){
                let usersArray = JSON.parse(request.response) 
                for (let i = 0; i < usersArray.length; i++) {
                    if(usersArray[i].name.length>0){
                        let userDiv = document.createElement("div")
                        userDiv.innerText = usersArray[i].name
                        document.body.appendChild(userDiv)
                        userDiv.id = "user" + usersArray[i].id
                        userDiv.addEventListener("click", aboutUser)
                    }
                    
                    
                }

            }
        }
        request.send()
}

function aboutUser(id){
    let id = this.id.substring(4,)
    let request
    if(window.XMLHttpRequest){
        request = new XMLHttpRequest();
    }else{
        request = new ActiveXObject("Microsoft.XMLHTTP")
    } 
    request.open("GET", "https://jsonplaceholder.typicode.com/users"+id)
    request.onload = function(){
        if(request.status == 200&&request.readyState==4){
            console.log(request.response)               
                
            }

        }
        request.send()
}


