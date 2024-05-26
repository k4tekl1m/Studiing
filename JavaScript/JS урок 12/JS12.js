//https://releases.jquery.com/


$(document).ready(function(){
    $(".class")
    $("#id")
    $("div").click(function(){
        // $("p").hide()// метод прячет элемент
        // $("p").toggle()// переключить
        $("p").text("Hello world")// добавить в параграф текст
        $("p").css("color","red")// вариант записи если 1 изменение
        $("p").css({"color":"red", "background-color":"black"})// вариант записит если нужно внести несколько изменений
    })
    $("button").click(function(){
        $("nav").children("div:first").css("background-color","green")//обращение к ребенку
        $("nav").find("p").eq(1).css("background-color","green")//.eq ищет по индексу 5, 6 или 26
        $("this").next().css("background-color","green")
        //метод .next() - обращение к соседнему элементу(внутрьничего не кладут можно писать .next().next() - через 2 элемента)
        $("this").prerend("Hello world")
    })
    $("button").click(function(){
        let p1 = document.createElement("p")// метод через document.createElement
        p1.innerText = "Hello I'm div1"

        let p2 = "<p>Hello I'm div2</p>"//метод текстовый

        let p3 = $("<p></p>").text("Hello, I'm div3")//метод через jquery

        $("nav").append(p1, p2, p3)
        $("p").click(function(){
            //$(this).remove()//удаляет и дочерние и родителя
            //$(this).empty()//удаляет только дочерние элементы
            //$(this).addClass("myClass")//добавить класс к элементу
            $(this).toggleClass("myClass")//переключить класс


        });
    });
    $("button").click(function(){
        $("p").eq(2).text($("div").css("background-color"))
    });
    $("button").click(function(){
        $("p").load("test.txt")        
    })
    $.ajax({
        url: 'test.txt',//куда
        method: 'get',//как
        dataType: 'text',//что ожидаем принять
        success: function(asd){
            $("p").text(asd["firstName"])
            $.ajax({
                url: 'https://jsonplaceholder.typicode.com/users',//куда
                method: 'get',//как
                dataType: 'json',//что ожидаем принять
                success: function(data){
                    data.forEach(user => {
                        let newP = $("<p></p>")
                        newP.text(user.name)
                        newP.attr("id","user"+user.id)
                        $("div").append(newP)
        
                    });
                    $("p").click(function(){
                        let id = $(this).attr("id").substring(4,)
                        $.ajax({
                            url: 'https://jsonplaceholder.typicode.com/albums?userId='+id,//куда
                            method: 'get',//как
                            dataType: 'json',//что ожидаем принять
                            success: function(data){
                                $("div#forAlbums").empty()
                                data.forEach(album => {
                                    let newP = $("<p></p>")
                                    newP.text(album.title)
                                    newP.css("background-color", "red")
                                    $("div#forAlbums").append(newP)
                                });
                                let albumId = $(this).attr("id").substring(5,)                                
                                $.ajax({
                                    url: 'https://jsonplaceholder.typicode.com/photos?albumId='+albumid,//куда
                                    method: 'get',//как
                                    dataType: 'json',//что ожидаем принять
                                    success: function(data){
                                        $("div#forPhotos").empty()
                                        data.forEach(photo => {
                                            let newImg = $("<img>")
                                            newImg.css("width", "300px")
                                            newImg.css("height", "300px")
                                            newImg.attr("src", photo.url)
                                            $("div#forPhotos").append()
                                        });
                                        
        
        
        
        
        
                                        
                                    }
                                })






                            }
                        })
                    })
                
                }
            })
            
        },
        // error: function(jqXHR,exception){
        //     if(jqXHR.status == 0){
        //         alert("Network error")
        //     }else if(jqXHR.status == 404){
        //         alert("Request page not found")
        //     }else if(jqXHR.status == 500){
        //         alert("Request server error")
        //     }else if(exception == 'parseerror'){
        //         alert("Parse error")
        //     }else if(exception == 'timeout'){
        //         alert("Time out error")
        //     }else{
        //         alert("Uncaught exception")
        //     }
        // }
    })




















});
