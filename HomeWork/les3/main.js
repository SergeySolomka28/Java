// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let ar1 = [21, 333, 45, 22, 67];
let artext = [`ww`, `er`, `sd`, `hj`, `qt`];
let arrall = [`hv`, `jsk`, 23, true, false];
console.log(ar1);
console.log(artext);
console.log(arrall);
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arr = [];
arr[0] = 12;
arr[1] = `dkdk`;
arr[2] = 38;
arr[3] = `eded`;
arr[4] = true;
console.log(arr);
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
let textarr = [`hello`, `world`, `home`, `run`, `green`, `down`, `sun`, `road`, `code`, `cool`];

for (i = 0; i < textarr.length; i++) {
    document.write(`<div>${textarr[i]}</div>`);
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let textarr1 = [`hello`, `world`, `home`, `run`, `green`, `down`, `sun`, `road`, `code`, `cool`, `hello`, `world`, `home`, `run`, `green`, `down`, `sun`, `road`, `code`, `cool`];
let i = 0;
while (i < textarr1.length) {
    document.write(`<h1>${textarr1[i]}</h1>`)

    i++;
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let j = 0;
while (j < textarr1.length) {
    document.write(`<h1> ${j} ${textarr1[j]}</h1>`)

    j++;
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (i = 0; i < textarr.length; i++) {
    document.write(`<div> ${i} ${textarr[i]}</div>`);
}


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arch = [22, 32, 33, 12, 122, 86, 4, 3, 7, 8];
for (const arch1 of arch) {
    console.log(arch1);
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let artx = [`hello`, `world`, `home`, `run`, `green`, `down`, `sun`, `road`, `code`, `cool`];
for (const artx1 of artx) {
    console.log(artx1);
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arlx = [`hello`, 11, `home`, true, 32, true, `sun`, `road`, 66, `cool`];
for (const arlx1 of arlx) {
    console.log(arlx1);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let arbul = [`hello`, 11, `home`, true, 32, true, `sun`, `road`, 66, `cool`];
for (const arbulElement of arbul) {
    if (typeof arbulElement === "boolean") {
        console.log(arbulElement)
    }

}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

for (const arbulElement of arbul) {
    if (typeof arbulElement === "string") {
        console.log(arbulElement)
    }

}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (const arbulElement of arbul) {
    if (typeof arbulElement === "number") {
        console.log(arbulElement)
    }

}


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let arrmax = [];
arrmax[0] = 1;
arrmax[1] = 32;
arrmax[2] = 11;
arrmax[3] = `dwdd`;
arrmax[4] = `qqw`;
arrmax[5] = true;
arrmax[6] = false;
arrmax[7] = `lllf`;
arrmax[8] = `kkk`;
arrmax[9] = 1212;
for (const arrmax1 of arrmax) {
    console.log(arrmax1)

}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (q = 0; q < 10; q++) {
    document.write(`${q}`);
    console.log(q);
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (q = 0; q < 100; q++) {
    document.write(`${q}`);
    console.log(q);
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (q = 0; q < 200; q = q + 2) {
    document.write(`${q}`);
    console.log(q);
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (q = 1; q < 100; q++) {
    if (q % 2 <= 0) {
        document.write(`${q}`);
        console.log(q);
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (q = 1; q < 100; q++) {
    if (q % 2 > 0) {
        document.write(`${q}`);
        console.log(q);
    }
}