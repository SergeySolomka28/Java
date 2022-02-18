// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function squd(a, b) {
    return a * b;
}

console.log(squd(11, 2))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function sqcirkl(radius) {
    let p = 3.14;
    let a = radius;
    return p * Math.pow(a, 2);

}

console.log(sqcirkl(2));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function scirkl1(h, r) {
    let p = 3.14;
    let s = 2 * p * r * h + 2 * p * Math.pow(r, 2);
    return s;
}

console.log(scirkl1(22, 44))
// - створити функцію яка приймає масив та виводить кожен його елемент
let arr1 = [`hello`, `world`, `home`, `run`, `green`, `down`, `sun`, `road`, `code`, `cool`];

function iter(itarr) {
    for (const itarrElement of itarr)
        console.log(itarrElement);
}

(iter(arr1));

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function textcreator(text) {
    document.write(`<p>${text}</p>`);
}

(textcreator(`welcome`));

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulcreator(text) {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}

(ulcreator(`come`));

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function creator(text, num) {
    document.write(`<ul>`);
    for (i = 0; i <= num; i++) {
        document.write(`<li>${text}</li>`)


    }
    document.write(`</ul>`);
}

creator(`dddd`, 5);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrlist = [`hello`, 23, `home`, 11, true, `down`, false, `road`, `code`, true];

function listcreator(list) {
    document.write(`<ol>`);
    for (const listElement of list) {
        document.write(`<li>${listElement}</li>`);
    }
}

document.write(`</ol>`);

(listcreator(arrlist));
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arruser = [{id: 1, name: `vasya`, age: 22}, {id: 2, name: `petya`, age: 21}, {id: 3, name: `ivan`, age: 31}];

function userlist(list) {
    for (const arruserElement of arruser) {
        document.write(`<div>${arruserElement.id} ${arruserElement.name} - ${arruserElement.age}</div>`)

    }
}
(userlist(arruser));