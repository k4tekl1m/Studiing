// https://www.codewars.com/
//https://codelab.pro/sozdaem-korzinu-tovarov-na-javascript/?ysclid=lvp7o8b2s1869558970

let addCart = document.getElementsByClassName("addCart")
count = 0
for (let i = 0; i < addCart.length; i++) {
    addCart[i].addEventListener("click", (e) => {
        e.preventDefault();
        count++
        let title = document.getElementsByClassName("card-title")[i].textContent
        let price = document.getElementsByClassName("card-text")[i].textContent
        let image = document.getElementsByClassName("card-img-top")[i].src
        document.cookie = `name${i}=${title}`;
        document.cookie = `price${i}=${price}`;
        document.cookie = `sourse${i}=${image}`;
        document.cookie = `product${i}=${count}`;
        console.log(document.cookie)
    })
}


