// Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
let element = document.getElementById('content');
console.log(element);

// -- отримує текст з блоку з id "rules"
let contbyruls = document.getElementById('rules');
console.log(contbyruls);

// -- замініть текст параграфа з id 'content' на будь-який інший
element.innerHTML = `<b>Text text</b>`;
// -- замініть текст параграфа з id 'rules' на будь-який інший
contbyruls.innerHTML = `<b>Text text text</b>`;

// -- змініть кожному елементу колір фону на червоний

element.style.background = 'red';
contbyruls.style.background = 'red';
let redElement=document.getElementsByClassName('fc_rules');
for (const redElementElement of redElement) {
    redElementElement.style.background='red';

}

// -- змініть кожному елементу колір тексту на синій
element.style.color = 'blue';
contbyruls.style.color = 'blue';
let blueText = document.getElementsByClassName('fc_rules');
for (const blueTextElement of blueText) {
    blueTextElement.style.color='blue'

}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(contbyruls.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let colorTextRed =document.getElementsByClassName('fc_rules')
for (const colorTextRedElement of colorTextRed) {
    colorTextRedElement.style.color='red';
}
