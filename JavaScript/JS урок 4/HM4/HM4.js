//1
// let auto = {
//     maker: "Ford",
//     model: " Focus",
//     year: " 2020",
//     speed: "80"
// }
// document.write(Object.values(auto))


// function allTime(){
//     let distance = +prompt("Задайте расстояние в километрах")
//     let time = distance/auto.speed + Math.floor(distance/(auto.speed*4))
//     return time
// }
// let result = allTime()
// document.write("<br>" + result)


//2
// let drob1 = {
//     chislitel: 1,
//     znamenatel: 2
// }

// let drob2 = {
//     chislitel: 1,
//     znamenatel: 6
// }
// let drob3 = {
//     chislitel: 10,
//     znamenatel: 15
// }

// function slogenie(){
//     let commonZnamenatel = drob1.znamenatel * drob2.znamenatel
//     let sum = drob2.znamenatel * drob1.chislitel + drob1.znamenatel * drob2.chislitel
//     return sum + "/" + commonZnamenatel
// }

// let result = slogenie()
// document.write(result)

// function vichitanie(){
//     let commonZnamenatel = drob1.znamenatel * drob2.znamenatel
//     let sum = drob2.znamenatel * drob1.chislitel - drob1.znamenatel * drob2.chislitel
//     return sum + "/" + commonZnamenatel
// }

// let result1 = vichitanie()
// document.write("<br>" + result1)

// function ymnozhenie(){
//     return drob1.chislitel* drob2.chislitel + "/" + drob1.znamenatel * drob2.znamenatel
// }
// let result2 = ymnozhenie()
// document.write("<br>" + result2)

// function delenie(){
//     return drob1.chislitel * drob2.znamenatel + "/" +  drob2.chislitel * drob1.znamenatel
// }
// let result3 = delenie()
// document.write("<br>" + result3)

// function sokraschenie(){
//     let coefficient = 0
//     if (drob3.chislitel<drob3.znamenatel){
//         for(let i =1;i<=drob3.chislitel;i++){
//             if(drob3.chislitel%i==0&&drob3.znamenatel%i==0){
//             coefficient=i
//             }
//         }
//     }
//     else {
//         for(let i =1;i<=drob3.znamenatel;i++){
//          if(drob3.znamenatel%i==0&&drob3.chislitel%i==0){
//             coefficient=i
//             }
//         }
//     }
//     return drob3.chislitel / coefficient + "/" + drob3.znamenatel / coefficient
// }
// let result4 = sokraschenie()
// document.write("<br>" + result4)


//3
let time = {
    hour: 12,
    minut: 37,
    second: 45,
    convertSecond (sec){
        let h = sec/3600
        this.hour += Math.floor(h)
        let m = (sec - Math.floor(h) * 3600) / 60
        this.minut += Math.floor(m)
        this.second = sec - (Math.floor(h) * 3600) - (Math.floor(m) * 60)
        if (this.second >= 60) {
            this.second %= 60;
            this.minut += Math.floor(this.second / 60);
        }
        if (this.minut >= 60) {
            this.minut %= 60;
            this.hour += Math.floor(this.minut / 60);
        }
        return time;
    },     
    convertMinutes(min) {
        let h = min / 60;
        this.hour += Math.floor(h);
        this.minut += min - (Math.floor(h) * 60);
        
        if (this.minut >= 60) {
            this.minut %= 60;
            this.hour += Math.floor(h / 60);
        }
        return time;
    },    
    convertHours(h) {
        this.hour = this.hour + h;
        return time;
    }
}
showTime ()
function showTime (){
    console.log("Время " + time.hour + ":" + time.minut + ":" + time.second)
}
time.convertMinutes(32)
time.convertHours(5)
time.convertSecond(5600)
showTime ()


