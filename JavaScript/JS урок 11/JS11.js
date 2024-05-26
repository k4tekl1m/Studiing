let request
if(window.XMLHttpRequest){
    request = new XMLHttpRequest();
}else{
    request = new ActiveXObject("Microsoft.XMLHTTP")
} 
request.open("GET", "https://jsonplaceholder.typicode.com/users")
    request.onload = function(){
        if(request.readyState==4&&request.status == 200){  
            console.log(JSON.parse(request.response))
            let usersArray = JSON.parse(request.response)
            usersArray.forEach(user => {
            document.getElementById("cardGrid").innerHTML+=
            `<div class="col">
                <div class="card mb-3">
                    <div class="card-header">${user.name}</div>
                    <div class="card-body">
                        <p class="card-text">${user.email}
                        <br>${user.phone},
                        <br>${user.address.city},
                        <br>${user.address.street},
                        <br>${user.address.suite}</p>
                        <button onclick="showPosts(${user.id}, '${user.name}')">Посмотреть посты</button>
                    </div>
                </div>
            </div>`
            });
        }
    }
request.send()

function showPosts(userID, userName){
    if(window.XMLHttpRequest){
        request = new XMLHttpRequest();
    }else{
        request = new ActiveXObject("Microsoft.XMLHTTP")
    } 
    request.open("GET", "https://jsonplaceholder.typicode.com/posts?userId="+ userID)
    request.onload = function(){
        if(request.readyState==4&&request.status == 200){
            let postArray = JSON.parse(request.response)
            document.getElementById("modalUserName").innerHTML = `${userName}'s posts <button id="close" onclick="closeComments()" style="font-size:10px;border:none;margin-left:100px;height:60px;padding:5px;text-align:center;">Закрыть комментарии</button>`
            document.getElementById("titleList").innerHTML=""
            postArray.forEach(post =>{
                document.getElementById("titleList").innerHTML+=
                `<li onclick="showPostBody(event)">${post.title}
                <p style="display:none">${post.body}</p>
                </li>
                <button onclick="showComments(${post.id})">Посмотреть комментарии</button>
                `            
            });
            document.getElementById("modalShade").style.display = "block"
            document.getElementById("modalWindow").style.display = "block"
            
        }
    }
    request.send()

}
function showComments(postId){
    if(window.XMLHttpRequest){
        request = new XMLHttpRequest();
    }else{
        request = new ActiveXObject("Microsoft.XMLHTTP")
    }
    request.open("GET", "https://jsonplaceholder.typicode.com/comments?postId="+ postId)
    request.onload = function(){
        if(request.readyState==4&&request.status == 200){
            let commentArray = JSON.parse(request.response)
            commentArray.forEach(commentary =>{
                document.getElementById("container").innerHTML+=
                `<div id="comment${commentary.id}" class="comment" style="left:${Math.round(Math.random()*1100)};top:${Math.round(Math.random()*1000*Math.random())};background-color: rgb(61, 174, 112);position: absolute;width: 250px;height: 300px; cursor: pointer; padding:10px; display:block;">
                <p>${commentary.name}<br>
                ${commentary.email}<br>
                ${commentary.body}<p><div>`
            });
            addDrugNdrop() 
        }
    }
    request.send()    
}

document.getElementById("modalShade").addEventListener("click", closeModal)
function closeModal(){
    document.getElementById("modalShade").style.display = "none"
    document.getElementById("modalWindow").style.display = "none"
}

function closeComments(){
    const comments = document.querySelectorAll('.comment')
    comments.forEach(comment => {
        comment.style.display = "none"
    })
}

function showPostBody(e){
    let post = e.target.children[0]
    post.style.display = "block"
    document.getElementById("modalWindow").style.overflow ="auto"
}

function addDrugNdrop() {
    const container = document.getElementById("container")
    const comments = document.querySelectorAll('.comment')

    comments.forEach(comment => {

        comment.addEventListener("mousedown", drugNdrop)
        function drugNdrop(event) {
            let shiftX = event.clientX - comment.getBoundingClientRect().left;
            let shiftY = event.clientY - comment.getBoundingClientRect().top;
            comment.style.zIndex = 1000;
            container.append(comment);
            moveAt(event.pageX, event.pageY);
    
        function moveAt(pageX, pageY) {
            comment.style.left = pageX - shiftX + 'px';
            comment.style.top = pageY - shiftY + 'px';
        }
        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }    
            document.addEventListener('mousemove', onMouseMove);
    
            comment.onmouseup = function() {
                document.removeEventListener('mousemove', onMouseMove);
                comment.onmouseup = null;
            };
            };
            comment.ondragstart = function() {
                return false;   
            };

    })
    
}

