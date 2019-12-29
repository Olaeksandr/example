'use strict';

let person = {};

function dataOutput() {
    
person.name = (prompt('Введите свое имя')).toUpperCase();
person.surname = (prompt('Введите свою фамилию')).toUpperCase();
person.age = Number(prompt('Введите свой возраст')); 

alert(`${person.name} ${person.surname}, возраст: ${person.age}`);

}

dataOutput();
