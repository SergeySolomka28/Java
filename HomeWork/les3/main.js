// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let ar1=[21, 333, 45, 22, 67];
let artext=[`ww`,`er`,`sd`,`hj`,`qt`];
let arrall=[`hv`,`jsk`,23, true,false];
console.log(ar1);
console.log(artext);
console.log(arrall);
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arr =[];
arr[0] =12;
arr[1]=`dkdk`;
arr[2]=38;
arr[3]=`eded`;
arr[4]= true;
console.log(arr);
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let textarr =[`hello`,`world`,`home`,`run`,`green`,`down`,`sun`,`road`,`code`,`cool`];

for (i=0; i<textarr.length; i++)  {
    document.write(`<div>${textarr[i]}</div>`);
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (i=0; i<textarr.length; i++)  {
    document.write(`<div> ${i} ${textarr[i]}</div>`);
    }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write