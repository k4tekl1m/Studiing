let i = 0
$(document).ready(function(){
    $("#pagination").hide()

})
const onSubmit = (e) => {
    e.preventDefault()
    i++
    $("#bodyMovies").empty()
    $("#bodyFilmDetails").empty()
    let title = document.getElementById("title").value
    const selectElement = document.getElementById("typeFilm")
    let selectedValue = selectElement.options[selectElement.selectedIndex].value;
    let page = 1
    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=a2359ff1&s='+title+'&type='+selectedValue+'&page='+page,
        method: 'get',
        dataType: 'json',
        success: function(data){
            console.log(data)
            let filmsArray = data.Search
            filmsArray.forEach(film => {
                console.log(film.Title)
                let bodyMovies = document.getElementById('bodyMovies')
                bodyMovies.innerHTML+=`
                    <div id="filmCard_${film.imdbID}" class="d-flex border col-3 mx-2 my-2" >
                        <div id="filmImg"><img src="${film.Poster}" class="card-img-top" alt="..."></div>
                        <div class="card-body" id="desc">
                        <p id="type" class="card-text">${film.Type}</p>
                        <h5 id="title" class="card-title">${film.Title}</h6>
                        <p id="year" class="card-text">${film.Year}</p>
                        <a  id="${film.imdbID}" class="btn btn-secondary addCart">Details</a>
                        </div>
                    </div>
                `
                //пагинация
                $("#pagination").show()
                
                //
                $(".btn").click(function(e){
                    e.preventDefault()
                    $("#bodyFilmDetails").empty()
                    let filmId = $(this).attr("id")
                    $.ajax({
                        url: 'http://www.omdbapi.com/?apikey=a2359ff1&i='+filmId,
                        method: 'get',
                        dataType: 'json',
                        success: function(filmObj){
                            console.log(filmObj)
                            let bodyFilmDetails = document.getElementById('bodyFilmDetails')
                            bodyFilmDetails.innerHTML+=`
                            <div id="filmCard" class="d-flex border mx-2 my-2" >
                            <div id="filmImgDesc"><img src="${filmObj.Poster}" class="card-img-top" alt="..."></div>
                            <div class="card-body" id="desc">
                                <table class="table">
                                    <tbody>
                                        <tr>
                                          <th scope="row">Title</th>
                                          <td>${filmObj.Title}</td>
                                        </tr>
                                        <tr>
                                          <th scope="row">Released</th>
                                          <td>${filmObj.Released}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Genre</th>
                                            <td>${filmObj.Genre}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Country</th>
                                            <td>${filmObj.Country}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Director</th>
                                            <td>${filmObj.Director}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Writer</th>
                                            <td>${filmObj.Writer}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Actors</th>
                                            <td>${filmObj.Actors}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Awards</th>
                                            <td>${filmObj.Awards}</td>
                                        </tr>
                                      </tbody>
                                </table>
                            </div>
                        </div>`
                        }
                    })

            
                })

            });
        }
    });

}




