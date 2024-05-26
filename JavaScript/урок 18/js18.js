//1
class button{

    constructor(width, height, text){
        this.width = width
        this.height = height
        this.text = text
    }
    showBtn(){
        document.write(`
        <button style="width:${this.width};height:${this.height}">${this.text}</button>
        `)
    }
}

class BootstrapButton extends button{

    constructor(width, height, text, color){
        super(width, height, text)
        this.color = color
    }
    showBtn(){
        document.write(`
        <button style="width:${this.width};height:${this.height};color:"${this.color}">${this.text}</button>
        `)
    }

}
let but = new button(200,100,"asd")
but.showBtn()

let but2 = new BootstrapButton(300,200,"hello","red")
but2.showBtn()

//2
class shape{
    constructor(arr, name){
        this.parts = arr
        this.name = name
    }
    get name(){
        return this.name
    }
    showInfo(){
        console.log("Фигура: "+this.name)
    }
    square(){
        console.log("Родительская функция площадь")
    }
    perimetr(){
        console.log("Родительская функция периметр")
    }
}
class triangle extends shape{
    constructor(a,b,c){
        super([a,b,c])
    }
    perimetr(){
        let p = a + b + c
        console.log("Периметр " + p)
    }
    square(){
        let s = Math.sqrt(р*(р-а)(р-b)(p-c))
        console.log("Площадь " + s)
    }    
}

class rectangle extends shape{
    constructor(a,b){
        super([a,b])
    }
    perimetr(){
        let p = (a + b)*2
        console.log("Периметр " + p)
    }
    square(){
        let s = a*b
        console.log("Площадь " + s)
    }   
}


class square extends shape{
    constructor(a){
        super([a])
    }
    perimetr(){
        let p = 4*a
        console.log("Периметр " + p)
    }
    square(){
        let s = a**4
        console.log("Площадь " + s)
    }    

}

let arrShapes = [triangle, square, rectangle]