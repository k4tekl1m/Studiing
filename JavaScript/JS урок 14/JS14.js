//https://dummyjson.com/quotes?limit=10&skip=10
//https://www.dev-notes.ru/articles/frontend/simple-pagination-html-css-javascript/

$(document).ready(function(){
    getQuotes(1)
    function getQuotes(page){
        let total = 0
        let limit = 10
        $.ajax({
            url:'https://dummyjson.com/quotes?limit=10&skip=0',
            method: 'get',
            dataType: 'json',
            success:function(data){
                let quotesArray = data.quotes;
                console.log(quotesArray)
                quotesArray = total/limit;
                quotesArray.forEach(quote=>{
                    $("#container").append(`
                <blockquote id="${quote.id}" class="blockquote bg-light ">
                    <p class="quote mb-1">${quote.quote}</p>
                    <span class="author">${quote.author}</span>
                </blockquote>
                    `)
                });

            },

        });

    }
});

