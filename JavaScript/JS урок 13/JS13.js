$(document).ready(function(){
    $("#leftSidebar").mouseenter(function(){

        $(this).animate({width: "300px"})
        
    })
    $("#leftSidebar").mouseleave(function(){
        $(this).animate({width: "30px"})
    })
    $.ajax({
        url:'https://dummyjson.com/recipes',
        method: 'get',
        dataType: 'json',
        success:function(data){
            console.log(data)
            let recipesArray = data.recipes
            // console.log(recipesArray)

            recipesArray.forEach(recipe =>{
                console.log(recipe)
                $("#cardGrid").append(`
                <div class="col-4">
                    <div class="card mt-3">
                        <img src="${recipe.image}" alt="" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${recipe.name}</h5>
                            <span class="badge rounded-pill bg-warning text-dark">${recipe.mealType}</span>
                            <span class="badge rounded-pill bg-secondary text-light">${recipe.cuisine}</span>
                            <p class="card-text">${recipe.tags}</p>
                            <a href="#" class="btn btn-primary">see more...</a>
                        </div>
                    </div>
                </div>
                `)
            });
            $("#butSearch").click(function(){
                // const selectElement = document.getElementById("typeFilm")
                // let selectedValue = selectElement.options[selectElement.selectedIndex].value;
        
                // $("#cardGrid").empty()
        
                let value = $("#foodFilter").value
                let inpValue = $("#inpSearch").value
                let findCard = $('#cardGrid').filter(find("h5").text(inpValue))
                findCard.toggle(showOrHide)
                
                // $("#cardGrid>div").filter(inpValue)
                
                // if(value === "Name"){
                    // return $("#cardGrid>div").filter(find("h5").text(inpValue))
                    // (function(inpValue){
                    //     $(this).toggle(find("h5").text(inpValue))
                    // })
                // }

        
            })
        }
        
    });

})