// document.addEventListener("keyup",function(event){
//     let num = [1,2,3,4,5,6,7,8,9,0]
//     for (let i = 0; i < num.length; i++) {
//         if(event.code.includes(num[i])){
//             event.preventDefault()
//         }        
//     }
//     console.log("Нажата клавиша" + event.code)
// })


//taskOne
// function noDigits(event) {
//     if ("1234567890".indexOf(event.key) != -1)
//       event.preventDefault()
// }

//taskTwo
// openModal.addEventListener("click", function(){
//     modalWindow.style.display = "block"
//     popup_fade.style.display = "block"
// })
// closeModal.addEventListener("click", function(){
//     modalWindow.style.display = "none"
// })

//taskFour
// let i = -1;

// button.addEventListener("click", function () {
//   i++;
//   let lights = ["red", "orange", "green"]
//   let light = document.querySelectorAll(".light")
//   if (light[i - 1]) light[i - 1].style.backgroundColor = ""
//   if (i == lights.length){
//     i = 0
//   } 
//   light[i].style.backgroundColor = lights[i]
// });


//taskFive
// booksList.addEventListener("click", function (e) {
//   let target = e.target;
//   higlight(target);
// });

// let selectLi;

// function higlight(li) {
//   if (selectLi) {
//     selectLi.classList.remove("active");
//   }
//   selectLi = li;
//   selectLi.classList.add("active");
// }

//taskSix
// let tooltipElem;

// document.onmouseover = function (e) {
//   let target = e.target;

//   let tooltipHtml = target.dataset.tooltip;
//   if (!tooltipHtml) return;

//   tooltipElem = document.createElement("div");
//   tooltipElem.className = "tooltip";
//   tooltipElem.innerHTML = tooltipHtml;
//   document.body.append(tooltipElem);

//   let coords = target.getBoundingClientRect();

//   let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
//   if (left < 0) left = 0;

//   let top = coords.top - tooltipElem.offsetHeight - 5;
//   if (top < 0) {
//     top = coords.top + target.offsetHeight + 5;
//   }

//   tooltipElem.style.left = left + "px";
//   tooltipElem.style.top = top + "px";
// };

// document.onmouseout = function (e){
//   if (tooltipElem) {
//     tooltipElem.remove();
//     tooltipElem = null;
//   }
// };


//taskSeven
for (let li of tree.querySelectorAll('li')){
  let span = document.createElement('span');
  li.prepend(span);
  span.append(span.nextSibling);
}

tree.onclick = function(event) {

if (event.target.tagName != 'SPAN'){
  return;
}

let childrenContainer = event.target.parentNode.querySelector('ul');
  if (!childrenContainer) return;
  childrenContainer.hidden = !childrenContainer.hidden;
}









