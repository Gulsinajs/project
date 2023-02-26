// let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//console.log(numberOfFilms);

// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = +prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = +prompt('На сколько оцените его?', '');

//     personalMovieDB.movies[a] = b;
//     personalMovieDB.movies[c] = d;
// console.log(personalMovieDB);

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error');
}

// if (num < 49) {
//     console.log('Error');
// } else if (num > 50) {
//     console.log('To many');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log('Error');

const num = 50;
switch (num) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 55:
        console.log('Ok!');
        break;    
    default:
        console.log('Не в этот раз');
        break;
}

// const hamburger = 5;
// const fries = null;

// if (hamburger && fries) {
//     console.log('Я сыт!');
// }

// console.log((hamburger && fries));

// 0 '' null undefined NAN всегда дают false

console.log(1 && 0); //0
console.log(1 && 5); //5
console.log(null && 5); //null
console.log(0 && 'ksdjskdj'); // 0

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// if (hamburger === 3 && cola === 1 && fries) {
//     console.log('Все сыты!');
// } else {
//     console.log('Мы уходим');
// }

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log('Все довольны!');
// } else {
//     console.log('Мы уходим');
// }

// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);

console.log(!0);

console.log(NaN || 2 || undefined); // 2
console.log(NaN && 2 && undefined); // NaN
console.log(1 && 2 && 3); // 3
console.log(!1 && 2 || !3); // false
console.log(25 || null && !3); // 25
console.log(NaN || null || !3 || undefined ||5); // 5
console.log(NaN || null && !3 && undefined || 5); // 5
console.log(5 === 5 && 3 > 1 || 5); // 5

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger && cola || fries === 3 && nuggets) {
    console.log('Done');
}

//Циклы

// while (number <= 55) {
//     console.log(number);
//     number++;
// }

// do {
//     console.log(number);
//     number++;
// }
// while (number < 55);
let number = 50;
for (let i = 1; i < 8; i++) {
    console.log(number);
    number++;
}

for (let i=1; i<10; i++) {
    if (i === 6) {
        //break;
        continue;
    }
    console.log(i);
}

for (let i = 0; i<3; i++) {
    console.log(i);
    for (let j = 0; j<3; j++) {
       console.log(j); 
    }
}

let result = '';
const length = 7;

for (let i = 1; i<length; i++){
    for (let j =0; j < i; j++){
        result += '*';
    }
    result += '\n';
}
console.log(result);
 
first: for (let i = 0; i<3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j<3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k<3; k++) {
            if (k == 2) continue first;
            console.log(`Third level: ${k}`);
        }
    }
}

for (let i = 5; i<11; i++) {
    if (i === 11) { break }
    console.log(i);
}

for (let i = 20; i>10; i--) {
    if (i === 13) break;
    console.log(i);
}

for (let i = 2; i <=16; i++){
    if (i % 2 == 0){
        console.log(i);
    }
}