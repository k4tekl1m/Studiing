//1
// let pokupki = [
//     {
//         name: "potaito",
//         count: 10,
//         buy: "true"
//     },
//     {
//         name: "soap",
//         count: 5,
//         buy: "false"
//     },
//     {
//         name: "tomato",
//         count: 3,
//         buy: "true"
//     },
//     {
//         name: "cucumber",
//         count: 1,
//         buy: "false"
//     },
//     {
//         name: "mushrooms",
//         count: 4,
//         buy: "true"
//     },
//     {
//         name: "napkins",
//         count: 2,
//         buy: "false"
//     }
// ]

// function mySort(a, b){
//     if (a.buy>b.buy) 
//          return 1
    
//      if (a.buy<b.buy) 
//          return -1
//      else
//      return 0;
// }



// pokupki.sort(mySort)
// console.log(pokupki)


// let letProduct = function (name = '', count = 0, arr = []){
//     let res = [...arr];
//     if (res.find(item => item.name === name)) {
//         for (let i = 0; i < res.length; i++) 
//             if (name === res[i].name) {
//                 res[i].count += count;
//             }
//     } else {
//         res.push({
//                 name,
//                 count,
//                 buy: false,
//          }) 
//     }
//     return res;     
// }

// const newList1 = [...pokupki];
// console.log(letProduct('egg', 4, newList1));



// function buySmth(){
//     let boughtItem = prompt("Что куплено?")
//     if (boughtItem = pokupki.name){
//         pokupki.buy = "true"
//     }
//     else {
//         alert("Такого не было в списке")
//     }
// }

// let res = buySmth()
// console.log(res)


// const addBuyingProduct = (arr = [], name = '') => {
//     let res = [...arr];
//     for (let i = 0; i < res.length; i++) {
//         if (name === res[i].name) {
//             res[i].isBought = true;
//         }
//     }

//     return res;
// }
// console.log(addBuyingProduct(pokupki, 'soap'))

//2
let cheque = [
    {
        name: "potaito",
        count: 10,
        price: 25,
    },
    {
        name: "soap",
        count: 5,
        price: 35,
    },
    {
        name: "tomato",
        count: 3,
        price: 45,
    },
    {
        name: "cucumber",
        count: 1,
        price: 55,
    },
    {
        name: "mushrooms",
        count: 4,
        price: 65,
    },
    {
        name: "napkins",
        count: 2,
        price: 75,
    }
]
function printCheque(){
    let res = cheque
    let sum = 0
    let total = 0
    for (let i = 0; i < res.length; i++) {
        sum = cheque[i].price * cheque[i].count
        total += sum
        document.write(cheque[i].name + " " + cheque[i].count + " шт. " + "..." + cheque[i].price + " руб." + "<br>" + " Всего " + sum + "<br>")
    }
    document.write("<br>" + "Итого " + total + " руб")

}
printCheque()
console.table(cheque)

function getHighPrice(){
    let res = cheque
    let sum = 0
    let highPrice = 0
    for (let i = 0; i < res.length; i++) {
        sum = cheque[i].price * cheque[i].count
        if(sum>highPrice){
            highPrice = sum
        }
    }
    return highPrice
}
let result = getHighPrice()
document.write("<br>" + "Самая дорогая покупка " + result + " руб")

function getAvaragePrice(){
    let res = cheque
    let total = 0
    let totalCount = 0
    for (let i = 0; i < res.length; i++) {
        total += cheque[i].price * cheque[i].count
        totalCount +=cheque[i].count
    }
    let avaragePrice = total/totalCount
    return avaragePrice
}
let avarage = getAvaragePrice()
document.write("<br>" + "Средняя цена за товар в чеке " + avarage + " руб")


//3
let styles = [
    {
        name: "color",
        value: "#0000ff",
    },
    {
        name: "font-size",
        value: "25px",
    },
    {
        name: "text-align",
        value: "center",
    },
    {
        name: "text-decoration",
        value: "underline",
    },
    {
        name: "padding",
        value: "30px",
    },
    {
        name: "border",
        value: "2px solid red",
    },
    {
        name: "border-radius",
        value: "15px",
    }
]
let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dignissimos."
function arrStyles (arr = [], text = ''){
    document.write('<p style = "');
        for (let i of arr) {
            document.write(`${i.name}: ${i.value}; `);
        }
    document.write('">' + text + "</p>");
}
arrStyles(styles, text)

//4
let ayditorii = [
    {
        name: "103b",
        seat: 15,
        faculty: "economy",
    },
    {
        name: "113b",
        seat: 10,
        faculty: "informatics",
    },
    {
        name: "125a",
        seat: 17,
        faculty: "information security",
    },
    {
        name: "209",
        seat: 20,
        faculty: "Languages",
    },
    {
        name: "128",
        seat: 20,
        faculty: "robotics",
    },
    {
        name: "131",
        seat: 18,
        faculty: "Languages",
    },
    {
        name: "211",
        seat: 14,
        faculty: "Languages",
    },
    { 
        name: "218", 
        seat: 10, 
        faculty: "Engineering" 
    },
    {
        name: "217",
        seat: 14,
        faculty: "Languages",
    },
]
function showAyditorii(arr = []){
    let rooms = []
    for(let i of arr){
        rooms.push(i.name)
    }
    document.write("Аудитории: " + rooms)
}
showAyditorii(ayditorii)

function showFacultyRooms(arr = [], faculty = ''){
    let facultyRooms = []
    for(let i of arr){
        if(i.faculty === faculty){
            facultyRooms.push(i.name)
        }
    }
    document.write("<br> Аудитории " + faculty + " :" + facultyRooms)
}
showFacultyRooms(ayditorii, "Languages")

let group = {
    name: "LG",
    count: 15,
    faculty: "Languages",
}
function showGroupRooms(arr = [], group = {}){
    let groupRooms = []
    for(let i of arr){
        if(i.seat >= group.count && i.faculty === group.faculty){
            groupRooms.push(i.name)
        }
    }
    document.write("<br> Аудитории группы " + group.name + " факультета " + group.faculty + " : " + groupRooms)
}
showGroupRooms(ayditorii, group)


function seatSort(a, b){
        if (a.seat>b.seat) 
             return 1        
        if (a.seat<b.seat) 
             return -1
        else
        return 0;
}
ayditorii.sort(seatSort)
console.log(ayditorii)


function nameSort(a, b){
    if (a.name>b.name) 
         return 1        
    if (a.name<b.name) 
         return -1
    else
    return 0;
}
ayditorii.sort(nameSort)
console.log(ayditorii)
