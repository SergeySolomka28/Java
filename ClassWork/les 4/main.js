- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function min(a, b, c) {
    if (a < b && b < c) return a;
    else if (a > b && b < c) return b;
    else if (a > c && b > c) return c;
}

console.log(min(21, 22, 44));

// // - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function max(a, b, c) {
    if (a > b && a > c) return a;
    else if (a < b && b > c) return b;
    else if (a < c && c > b) return c;
}

console.log(max(77, 888, 665))
// - створити функцію яка повертає найбільше число з масиву
let max = [28, 88, 33, 38, 82, 12];

function arrmax(maxarr) {
    let elem = max[0];
    for (const num of maxarr) {
        if (num > elem) {
            elem = num;
        }
    }
    return elem;
}

console.log(arrmax(max));

// // - створити функцію яка повертає найменьше число з масиву
let min = [28, 88, 33, 38, 82, 12];

function arrmin(minarr) {
    let elem = min[0];
    for (const num of minarr) {
        if (num < elem) {
            elem = num;
        }
    }
    return elem;
}

console.log(arrmin(min));
// // - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
//
let sum = [218, 75, 33, 38, 82, 22];

function qq(sum1) {
    let aa = 0;
    for (i = 0; i < sum.length; i++) {
        aa = aa + sum[i];
    }
    return aa;
}

console.log(qq(sum));
- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let sum1 = [218, 75, 33, 38, 82, 22];

function qq(sum) {
    let aa = 0;
    for (i = 0; i < sum1.length; i++) {
        aa = aa + sum1[i];
    }
    aa=aa/sum1.length;
    return aa;
}

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function minmax(arg) {
    let min = arguments[0];
    let max = arguments[0];
    for (const numb of arguments) {
        if (numb < min) {
            min = numb;
        }
        if (numb > max) {
            max = numb;
        }
    }
    console.log(max);
    return min;
}

document.write('Min number = ' + minmax(32, 322, 111, 45));


// - створити функцію яка заповнює масив рандомними числами

function fullrand(rand) {
    let array = [];
    for (let i = 0; i < rand; i++) {
        array.push(Math.floor(Math.random() * 20));
    }
    return array;
}

console.log(fullrand(29));


// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

function fuulgen(limit) {
    let arrlimit = [];
    for (let i = 0; i < limit; i++) {
        arrlimit.push(Math.round(Math.random() * limit))
        return arrlimit;
    }

}

console.log(fuulgen(100));
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
