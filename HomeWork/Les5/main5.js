// Всі функції повинні бути описані стрілочним типом!!!!

//     - створити функцію яка обчислює та повертає площу прямокутника
let squd = (a, b) => a * b;
console.log(squd(14, 98));
// - створити функцію яка обчислює та повертає площу кола
let sqcirkl = (radius) => {
    let p = 3.14;
    return p * Math.pow(radius, 2);
}
console.log(sqcirkl(3));
// - створити функцію яка обчислює та повертає площу циліндру
let scirkl1 = (h, r) => 2 * 3.14 * r * h + 2 * 3.14 * Math.pow(r, 2);

console.log(scirkl1(22, 44));
// - створити функцію яка приймає масив та виводить кожен його елемент

let arr1 = [`hello`, `world`, `home`, `run`, `green`, `down`, `sun`, `road`, `code`, `cool`];

let iter = (itarr) => {
    for (const itarrElement of itarr)
        console.log(itarrElement);
}
(iter(arr1));
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let textcreator = (text) => document.write(`<p>${text}</p>`);
(textcreator(`welcome`));
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let ulcreator = (text) => {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}
(ulcreator(`come`));
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let creator = (text, num) => {
    document.write(`<ul>`);
    for (i = 0; i <= num; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);
}
creator(`dddd`, 5);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrlist = [`hello`, 23, `home`, 11, true, `down`, false, `road`, `code`, true];

let listcreator = (list) => {
    document.write(`<ol>`);
    for (const listElement of list) {
        document.write(`<li>${listElement}</li>`);
    }
}
document.write(`</ol>`);
(listcreator(arrlist));
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arruser = [{id: 1, name: `vasya`, age: 22}, {id: 2, name: `petya`, age: 21}, {id: 3, name: `ivan`, age: 31}];

let userlist=(list)=>{
    for (const arruserElement of arruser) {
        document.write(`<div>${arruserElement.id} ${arruserElement.name} - ${arruserElement.age}</div>`)
    }
}
(userlist(arruser));