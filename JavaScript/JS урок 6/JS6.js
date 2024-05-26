//1 метод
// function blockClick(){
//     alert("Вы кликнули на блок")
// }
//2 метод

// block.onclick = function(){
//     alert("Вы кликнули на блок")

// }

//3 метод
//принимает 2 аргумента, событие прилетает внутрь функции, e - аргумент
//nodeName - свойство элемента
// block.addEventListener("click", function(e){
//     console.log(e.target.nodeName)
//     // alert("Привет")
// })
body.addEventListener("click", function(e){
//     // console.log(e.target.nodeName)
//     // screenX - относительно манитора
//     // сдшутеX - относительно окошка пользователя
//     // проверяем высоту блока
    block.style.left = e.pageX + "px"
    block.style.top = e.pageY + "px"
    block.style.display = "block"
    block.style.backgroundColor = "rgb("+
    Math.round(Math.random()*255)+","+
    Math.round(Math.random()*255)+","+
    Math.round(Math.random()*255)+")"
    console.log(block.style.top)
})

// body.addEventListener("mousemove", function(e){
//     block.style.left = e.pageX + "px"
//     block.style.top = e.pageY + "px"
//     block.style.display = "block"
//     block.style.backgroundColor = "rgb("+
//     150+","+ e.pageX+","+e.pageY+")"
//     console.log(block.style.top)
// })

// block.addEventListener("mouseenter", function(){
//     out.innerHTML = "мышь вошла"
// })
// block.addEventListener("mouseleave", function(){
//     out.innerHTML = "мышь ушла"
// })
// button.addEventListener("click", function(){
//     num.innerHTML = Math.round(Math.random()*100)
// })

container.addEventListener("mousemove", function(e){
    container.style.left = e.offsetX + "px"
    container.style.top = e.offsetY + "px"
    // console.log("X = " + container.style.left, "Y = " + container.style.top,)
    container.innerHTML = "X = " + container.style.left + "Y = " + container.style.top
})
// container.addEventListener("click", function(e){
//     container.innerHTML += "Клик левой <br>"
//     // console.log("Клик левой")
// })
// container.addEventListener("contextmenu", function(e){
//     container.innerHTML += "Клик правой <br>"
//     // console.log("Клик правой")
//     e.preventDefault()
// })

//2
// let textShow = true
// myBut.addEventListener("click", function(){
//     if(textShow==true){
//         text.style.display = "none"
//         textShow = false
//     }else{
//         text.style.display = "block"
//         textShow = true
//     }
// })

mhtml.addEventListener("", function(){
    
})