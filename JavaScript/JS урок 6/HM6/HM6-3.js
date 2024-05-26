//taskThree
field.addEventListener("click", function(e){
    let fieldCoords = field.getBoundingClientRect();
    let ballCoords = {
      top: e.clientY - fieldCoords.top - ball.clientHeight / 2,
      left: e.clientX - fieldCoords.left - ball.clientWidth / 2,
    };  
    ball.style.top = ballCoords.top// + "px";
    ball.style.left = ballCoords.left// + "px";
    // if(e.clientX> 1066){
    //     e.preventDefault();
    // }
    console.log(e.clientX)
})
