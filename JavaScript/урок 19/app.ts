// let userName:string = "Vasya";
// console.log(userName);


// let numOne:number = 10;
// let flag:boolean = true;
// let str:string = "asd";
// let arr:number[] = [1,2,3]
// let colors:string[] = ["blue", "green"];
// let colors = ["blue", "green", 123];
// let colors:(string|number)[] = ["blue", "green", 123];

// let colorTwo:Array<string> = ["one", "two"];
// colors[2] = "asd";

// let something:number|string = "str"

// enum Season {Winter, Summer, Autumn, Spring};
// let currentSeason:string = Season[1];

// let numOne: any;
// numOne = 1200;
// if(typeof numOne ==="number"){
//     console.log("yes");
// }else{
//     console.log("no");
// }

// type numberOrString = number|string;
// let sum:numberOrString = 10;
// console.log(typeof sum);

//преобразование типов
// let val:any = "my new string"
// let len:number = (<string>val).length;
// let len2:number = (val as string).length;
// console.log(len)

// function sum(a:number, b:number):number{
//     return a+b;
// }

// function getName(firstName:string,lastName:string="Pupkin"):string{
//     if(lastName){
//         return firstName+""+lastName;
//     }else{
//         return firstName;
//     }
// }
// console.log(getName("Pupkin", "vasya"));
// console.log(getName("Dima"));

// function sum(a:number, b:number):number;
// function sum(a:string, b:string):string;
// function sum(a:any, b:any):any{
//     return a+b;
// }
// console.log(sum(1,2));
// console.log(sum("1","2"));



// function sum(a:number, b:number):number{
//     return a+b;
// }
// function div(a:number, b:number):number{
//     return a/b;
// }
//переменная у которой тип - функция (в нее можно положить только функцию)
// let op: (x:number, y:number)=>number = sum;
///
// console.log(op(2,3))
// op = div
// console.log(op(2,3))
// //перегрузка функции
// function getDate(timeStamp:number):Date;
// function getDate(day:number, month:number, year:number):Date;
// function getDate(dOrtimeStamp:number,month?:number, year?:number):Date{
//     if(month!==undefined && year! ==undefined){
//         return new Date(dOrtimeStamp, month, year);
//     }else{
//         return new Date(dOrtimeStamp)
//     }
// }
// let date1 = getDate(12345678)
// let date2 = getDate(12,12,1990)
//let date3 = getDate(12,12)//ошибка функция принимает 1 или 3 числа

//колбэк функия или ф-ия обратного вызова
// function mathOp(a:number, b:number, oper:(x:number,y:number)=>number):number{
//     let res = oper(a,b)
//     return res
// }
// let sum: (x:number, b:number)=>number;
// sum = function(a:number, b:number):number{
//     return a+b
// }
// console.log(mathOp(10,2,sum))


// let sum = (x:number, y:number) => x+y;
// let sub = (x,y) => x-y;
// let hello = () => "hello"
// console.log(hello())


// class user{
//     readonly id:number; //после создания изменить нельзя
//     protected name:string;
//     static usersCount:number = 0;
//     constructor(userId:number, userName:string){
//         this.id = userId
//         this.name = userName
//         user.usersCount++
//     }
//     getInfo(){
//         return `id: ${this.id}, name:${this.name}`
//     }
// }
// let dima:user = new user(5, "Dmitry");
// //автоэнкремент
// console.log(dima.getInfo())
// console.log(user.usersCount)

//абстр класс - класс без реализации метода
// abstract class Animal{
//     abstract Voice():void;
// }

// class Cat extends Animal{
//     Voice(): void {
//         console.log("Миау")
//     }
// }

// //объекты строго типизированы
// interface IUser{
//     id:number;
//     name:string;
//     age?:number;//? - необязательный
//     getFullName(surname:string):string;
// }
// let employee: IUser = {
//     id: 1,
//     name: 'vasya',
//     age: 30,//нельзя добавить доп поле
//     getFullName(surname:string):string {
//         return this.name + " " + surname;
//     },
// }
// employee.getFullName("asd")

// //обобщение
// function show<T>(something: T): T{
//     return something;
// }
// let res = show<string>("5");

// class User<T,C>{
//     id: T;
//     name:C;
// }
// let dima:User<number,string> = new User()
// let misha:User<string, number> = new User()
// dima.id = 5;
// dima.name = "Dima";

//пространство имен классы и функции не будут доступны в других нейм спейсах
namespace mainApp{
    class User{
    }
    function foo(){}
}
let user1:User = new User()//не будет работать
namespace asd{

}