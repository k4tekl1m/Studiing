let textaRray = [
    "Шапки", 
    "Обувь", 
    "Куртки", 
    "футболки",
    "Толстовки",
]
//childNodes - дочерние элементы (параметр)
// if(document.getElementById("myList").hasChildNodes()){
//     let lis = document.getElementById("myList").children;
//     // console.log(lis)
//     for (let i = 0; i < textaRray.length; i++) {
//         // console.log(lis[i])
//         // if(lis[i].nodeName == "LI")
//         lis[i].innerText = textaRray[i]
//     }
// }

// document.getElementById("but").addEventListener("click", add)

// function add(){
//   let newLi =  document.createElement("li")
//   newLi.innerText = "test"
//   let lastChild = document.getElementById("but")
// //   document.getElementById("myList").appendChild(newLi)
//   document.getElementById("myList").insertBefore(newLi, lastChild);
// }

let count = 0
function add(){
    count++
    let newDiv = document.createElement("div")
    newDiv.style.width = "100px"
    newDiv.style.height = "50px"
    newDiv.style.display = "inline-block"
    newDiv.style.backgroundColor = "rgb("+
        Math.round(Math.random()*255)+","+
        Math.round(Math.random()*255)+","+
        Math.round(Math.random()*255)+")"
    newDiv.id = "cube" + count
    container.appendChild(newDiv)
    newDiv.addEventListener("click", function(){
        container.removeChild(newDiv)
    })
}

blockButton.addEventListener("click", add)


let i = 0
addBut.addEventListener("click", function(){
    i++
    let newComment = document.createElement("div")
    let newUname = document.createElement("h5")
    let newDate = document.createElement("p")
    let newText = document.createElement("p")
    let container = document.getElementById("containerComment")
    newComment.appendChild(newUname)
    newComment.appendChild(newDate)
    newComment.appendChild(newText)
    container.appendChild(newComment)
    let valueUname = document.getElementById("uName").value
    newUname.innerHTML = valueUname
    let valueText = document.getElementById("uText").value
    newText.innerHTML = valueText
    newDate.innerHTML = new Date().toDateString()
    newComment.id = "comment" + i
    
})

//обработку отправки формы изучить