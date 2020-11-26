'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};


let enter = 5;

//"Загадывание случайного числа от 1 до 100"

let playGame = function() {
    let question1 = prompt('Угадай число от 1 до 100');
    while(!isNumber(question1)) {
        alert('Введи число!');
        question1 = prompt('Угадай число от 1 до 100');                       
    }
    question1 = parseFloat(question1);

    let select = function() {
        if(question1 === enter) {
        alert('Поздравляю, Вы угадали!!!');
        } else if (question1 < enter && question1 < 100 && question1 > 0) {
            alert('Загаданное число больше');
            question1 = prompt('Угадай число от 1 до 100');            
        } else if (question1 > enter && question1 < 100 && question1 > 0) {
            alert('Загаданное число меньше');
            question1 = prompt('Угадай число от 1 до 100');            
        } else {
            alert('"Игра окончена"');
        }
        question1 = parseFloat(question1);
    };
    select();                          
};

playGame();
