// объекты
// let obj = new Object() - 1 способ


// let student = new Object()
// student["Name"] = "Oleg"
// student['Age'] = 12
// delete student.Age


// // let obj2 = {} - 2 способ
// student.LastName = "Pupkin"

// document.write(student.Name)
// document.write(student.LastName)


// if("Age" in student){
//     document.write("Есть такой")
// }else{
//     document.write("нет")
// }


// let obj3 = {
//     name: "Nolik",
//     age:12,
//     address: "Novosib, ul. Lenina..."
// }

// for(let svoistvo in obj3){
//     document.write(svoistvo + " ")
//     document.write(obj3[svoistvo] + "<br>")
// }





//массивы
// let arr = new Array()
// arr[0] = 34
// arr[1] = 45
// arr[2] = 56

// let arr2 = new Array(1,2,3,4,5,6)

// document.write(arr[0])

// let arr3 = new Array()
// arr3[499] = 1234
// document.write(arr3.length)
// // длина - последний индекс +1
// document.write(arr3.[10])

// let arr3 = [1,2,3,4,5]
let arr3 = ["audi", "bmw", 1, "matiz", 2, true]

for (let i = 0; i < arr3.length; i++) {
     document.write(arr3[i]+"<br>")
}



// //двумерные массивы (матрицы)
// let arr = [
//     [1,2,3], 
//     [4,5,6]
// ]
// document.write(arr[0][1])

// let numbers = [1,2,3,4,5,6,7,8,9,10]
// document.write(numbers.indexOf(5)) //ищет заданное значение а не индекс

// let numbers = [9,1234,9,48,5,6,7,88,9,10]
// document.write(numbers.indexOf(9, 3)) //ищем девятку с третьей позиции

// //обратный порядок справа на лево
// document.write(numbers.lastIndexOf(9)) //выводит позицию на которой нашел значение


// //пример
// let arr = [12,-45,57,99,-123,12,55,12,87,12]
// let counter = 0 
// let index = arr.indexOf(12)//если значения нет в массиве вернет -1
// while(index!=-1){
//     counter++
//     index = arr.indexOf(12,index+1)
// }
// document.write(counter)


// let arr = [12,-45,57,99,-123,12,55,12,87,12]
// let counter = 0 
// let index = arr.lastIndexOf(12)
// while(index!=-1){
//     counter++
//     if(index==0){
//         break
//     }
//     index = arr.lastIndexOf(12,index-1)
// }
// document.write(counter)


// let arr = [12,-45,57,99,-123,12,55,12,87,12]
// let counter = 0 
// let index = arr.lastIndexOf(12,4)//с какой позиции искать в обратном направлении
// document.write(index)

// //сортировка массива
// let arr = [10,1,3,33,111111]
// document.write(arr + "<br>")
// arr.sort(mySort)

// function myNumberSort(a,b){
//     if(a>b) 
//         return 1
//     else if (b>a)
//         return -1
//     else 
//         return 0
// }
// let arr = [10,1,3,33,111111]
// document.write(arr + "<br>")
// arr.sort(myNumberSort)
// document.write(arr)

// let str = "bmw, audi, daewoo"
// let arr = str.split(",")//разбиение строки на элементы 
// document.write(arr[0])

// let arr = ["bmw", "audi", "daewoo"]
// let str = arr.join("_")//объединение элементов в строку, джоин применяют к массиву
// document.write(str)






//работа со строками
// let str = "gold"
// document.write(str.length)
// document.write(str.charAt(6))//символ под индексом - работает со строкой
// document.write(str[6])


// let str = "GOLD"
// document.write(str.toLowerCase())
// document.write("<h1>"+str.toLowerCase()+"</h1>")
// document.write(str.toUpperCase())


// let str = "GOLD"
// let index = str.indexOf("O")
// document.write(index)

// let str = "луч солнца золотого"
// let subStr = str.substring(4,10)//указываем с какого по какой символ вырезать
// document.write(subStr)

// if(str.localeCompare("луч солнца золотого")>0){
//     document.write("первая строка больше")
// }else{
//     document.write("вторая строка больше")
// }

//сравнивает до первого несовпадения посимвольно (в алфавитном порядке)






//задержки и интервалы
// setTimeout(sum, 1000, 10,20)//функция, задержка, аргументы

// function sum(a, b){
//     document.write(a+b)
// }

//альтернативный вид записи
// setTimeout(function(a, b){
//     document.write(a+b)
// },1000,10,20)

// setTimeout(function(){
//     document.write("hello")
// },1000)

// setInterval(function(){
//     document.write("hello")
// }, 1000)

// let id = setTimeout(hello, 1000)
// let counter = 0
// function hello(){
//     if(counter==3){
//         clearTimeout(id)
//         return
//     }
//     counter++
//     document.write("hello" + counter+ "<br>" )
//     id = setTimeout(hello, 1000)
// }


//библиотека
// Math.PI//3.14
// Math.E//2.71828
// Math.SQRT2//1.14
// Math.SQRT1_2//0.77

// let str = 0

let num = Math.ceil(3.4)
let num2 = Math.round(3.4)
let num3 = Math.floor(3.4)
document.write(num,num2,num3)

Math.pow(3,4)//3**4 - три в степени 4
document.write(Math.min(1,2,3,6,-10,-3) + "")
document.write(Math.max(1,2,3,6,-10,-3))

let arr = [1,7,8,0,3,1,-10]
console.log(Math.min())


let randNum = Math.random()
document.write(Math.floor(randNum*10))

