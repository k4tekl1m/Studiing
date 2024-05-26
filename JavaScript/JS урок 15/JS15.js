class BaseClass{//абстрактный класс (почти не используют)
    print(){}
    show(){}
}
class Human{
    #id//приватное поле
    constructor(name, age){
        this.name = name
        this.age = age
        if(age<18){
            this.age = 18
        }else{
            this.age = age
        }
        this.#id = Math.floor(Math.random()*1000)
    }
    showAge(){
        console.log("Age: "+ this.age)
    }
    print(){
        console.log(this.#id+") "+this.name+","+this.age+" --->"+this.constructor.name)
    }
    //инкапсуляция(геттеры/сеттеры)
    set id(value){
        this.#id = value
    }
    get id(){
        return this.#id
    }
}
class Teacher extends Human{
    constructor(name, age, subjects=[]){
        super(name, age)
        this.subjects = subjects
    }
    foo(){
        if(age<30)
        console.log('Младший преподаватель')
    else
        console.log('Старший преподаватель')
    }
}
class Proffesor extends Teacher{
    constructor(name, age, subjects=[], level){
        super(name, age, subjects)
        this.level = level
    }
}
let andrey = new Human("Andrey",14)
let dima = new Teacher("Dima",30, ["math", "bio"])
let kolya = new Teacher("Nikolay",31, ["math", "bio"])
// andrey.print()
// dima.print()
// andrey.foo()
// dima.foo()
//инкапсуляция доступ к переменным может быть не публичным

class PrintMachine{
    constructor(fontSize, color, fontFamily){
        this.fontSize = fontSize
        this.color = color
        this.fontFamily = fontFamily
    }
    print(text){
        document.write(`<p style="font-size:${this.fontSize}px; color:${this.color}; font-family:${this.fontFamily};">${text}</p>`)
    }
}

let header = new PrintMachine(40, "red","Arial")
header.print("Hello world")

class PrintNews{
    constructor(header, text, tags, date){
        this.header = header
        this.text = text
        this.tags = tags
        this.date = date
    }
    checkDate(){
        if(date )
    }
    print(News){

    }
}

//to locale date string
