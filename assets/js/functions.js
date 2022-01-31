// Task 1
// S = a*b

function getSquare(a, b) {
    return `Площадь треугольника с высотой ${a} и шириной ${b} равна ${a*b} см квадратных`;
}

// Task 2
// P = 2*pi*r

function getSircleLength (diam) {
    return `Длина (периметр) окружности с диаметром ${diam} равна ${Math.PI*2*(diam/2)} см`
}

// Task 3
// V = pi*r**2*h

function getCylinderCapacity (diam, h) {
    return `Объем циллиндра с высотой ${h} и диаметром основания окружности ${diam} равен ${Math.PI*((diam/2)**2)*h} см кубических`
}

// Task 4

function currancyConventer() {
    const grivnaRate = 0.035;
    const dollarRate = 28.7; 
    
    let grivna = prompt(`Введите желаемое количество валюты, которое вы хотите конвертировать, в гривнах.`);
    let dollar = prompt(`Введите желаемое количество валюты, которое вы хотите конвертировать, в долларах.`);
    let caseConverter = prompt(`Введите 1, если хотите конвертировать гривны в доллары;
Введите 2, если хотите конвертировать доллары в гривны;`);
    switch(caseConverter) {
        case '1': alert(`На текущий момент ${grivna} гривен равно ${grivna*grivnaRate} долларам`);
        break;
        case '2': alert(`На текущий момент ${dollar} долларов равно ${dollar*dollarRate} гривнам`);
        break;
        default: alert('Вы ничего не выбрали, или введеное вами значение не соответвствет диапазону выбора!');
    }
}

// Task 5

function getDivisionOn5 (from, to) {
    for (let i = from; i < to; i++) {
        if (i % 5 === 0) {
            console.log(i);
        }        
    }
}

// Task 6

function fizzBuzzGame () {
    for (let i = 1; i < 100; i++) {
        if(i % 3 === 0 && i % 5 === 0){
            console.log('Fizz Buzz');
        } else if(i % 5 === 0) {
            console.log('Buzz');
        } else if(i % 3 === 0) {
            console.log('Fizz');
        } else {
            console.log(i)
        }
        
    }
}
