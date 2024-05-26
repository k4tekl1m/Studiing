$(document).ready(function(){
    getQuotes(1);
})
function getQuotes(page){
    let total = 0;
    let limit = 10;
    $.ajax({
        url:`https://dummyjson.com/quotes?limit=${limit}&skip=${limit*(page-1)}`,
        method:'get',
        dataType: 'json',
        success:function(data){
            console.log(data)
            total = data.quotes.total;
            let totalPage = total/limit;
            $("#mainGrid").empty()
            data.quotes.forEach(quoteElem => {
                output = `
                <figure class="shadow-sm mb-3">
                    <blockquote class="blockquote">
                        <p>${quoteElem.quote}</p>
                    </blockquote>
                    <figcaption class="blockquote-footer">
                        ${quoteElem.author}
                    </figcaption>
                </figure>`
                $("#mainGrid").append(output)
                $("#pagination").empty()
                if(page<=1){
                    $("#pagination").append(`<li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                    </li>`);
                }
                else{
                    $("#pagination").append(`<li class="page-item">
                        <a onclick="getQuotes(${page-1})" class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                    </li>`);
                }
                if(page<3){
                    for (let i = 1; i < page+6; i++) {
                        let pageButtons=""
                        if(i==page)
                            pageButtons = `<li class="page-item active"><a onclick="getQuotes(${i})" class="page-link" href="#">${i}</a></li>`;
                        else
                            pageButtons = `<li class="page-item"><a onclick="getQuotes(${i})" class="page-link" href="#">${i}</a></li>`;
                        $("#pagination").append(pageButtons)
                    }
                }else if(page>totalPage-3){
                    for (let i = totalPage-6; i < totalPage+1; i++) {
                        let pageButtons=""
                        if(i==page)
                            pageButtons = `<li class="page-item active"><a onclick="getQuotes(${i})" class="page-link" href="#">${i}</a></li>`;
                        else
                            pageButtons = `<li class="page-item"><a onclick="getQuotes(${i})" class="page-link" href="#">${i}</a></li>`;
                        $("#pagination").append(pageButtons)
                    }
                }else{
                    for (let i = page-2; i < page+3; i++) {
                        let pageButtons=""
                        if(i==page)
                            pageButtons = `<li class="page-item active"><a onclick="getQuotes(${i})" class="page-link" href="#">${i}</a></li>`;
                        else
                            pageButtons = `<li class="page-item"><a onclick="getQuotes(${i})" class="page-link" href="#">${i}</a></li>`;
                        $("#pagination").append(pageButtons)
                    }
                }
                if(page>totalPage-3){
                    $("#pagination").append(`<li class="page-item disabled">
                        <a class="page-link" href="#">Next</a>
                </li>`);
                }else{
                    $("#pagination").append(`<li class="page-item">
                        <a onclick="getQuotes(${page+1})" class="page-link" href="#">Next</a>
                    </li>`);
                }
            });
        },
        error: function (jqXHR, exception) {
            let msg = '';
            if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status == 404) {
                msg = 'Requested page not found. [404]';
            } else if (jqXHR.status == 500) {
                msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                msg = 'Time out error.';
            } else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            } else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            console.log(msg);
        }
    });
}