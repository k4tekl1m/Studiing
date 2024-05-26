// var username = prompt("Введите ваше имя");
// alert("Привет, " + username + "!");

// const currenYear = 2024;
// birth = prompt("Введите год рождения");
// alert("Вам "+ (currenYear-birth) +" лет!");

// sideSquare = prompt("Задайте сторону квадрата");
// alert("Периметр квадрата равен " + (sideSquare*4));

// const pi = 3.14;
// radius = prompt("Введите радиус");
// alert("Площадь окружности равна " + (pi*(Math.pow(radius,2))));

// langht = prompt("Укажите расстояние в километрах до города");
// time = prompt("Укажите за сколько часов Вы ходите добраться");
// alert("Вы должнв двигаться со скоростью "+ (langht/time) + " км/ч");

// const cours = 0.917;
// dollar = prompt("Введите сумму в долларах");
// alert(dollar*cours + " евро");

// const file = 1024;
// memory = prompt("Сколько Гб на флешке?");
// alert(Math.floor(memory*file/820));


// cash = prompt("Введите сумму денег");
// price = prompt("Введите стоимость шоколадки");
// count = (Math.floor(cash/price));
// change = cash - count * price;
// alert( "Вы можете купить " + count + " шоколадок. " + "Ваша сдача " + change +" руб");

// number = prompt("Введите трехзначное число");
// a = Number(number % 10);
// b = Number((number - a) / 10 % 10);
// c = Number((number - a - b * 10) / 100);
// alert('Число задом наперед ' + (a * 100 + b * 10 + c));

figure = prompt("Введите целое число");
alert((figure/2 == 0) ? "Четное" : "Нечетное");