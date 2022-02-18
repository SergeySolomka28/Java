// Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let string = ['hello world', 'lorem ipsum', 'javascript is cool'];
console.log(string[0].length);
console.log(string[1].length);
console.log(string[2].length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let a = string[0].toUpperCase();
console.log(a);
let b = string[1].toUpperCase();
console.log(b);
let c = string[2].toUpperCase();
console.log(c);
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let a1 = a.toLowerCase();
console.log(a1);
let b1 = b.toLowerCase();
console.log(b1);
let c1 = c.toLowerCase();
console.log(c1);
// - Є "брудна" стрінга let str = ' dirty  string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
let clear = str.trim();
console.log(clear);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str1 = 'Каждый охотник желает знать';
let strinarr = (str) => {
    let split = str.split(' ')
    console.log(split);
};
strinarr(str1);

//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr);
// ['Каждый', 'охотник', 'желает', 'знать']
//
//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
let strn = 'Каждый охотник желает знать';
let delete_characters = (str, index) => {
    return str.substr(0, index);
};
document.writeln(delete_characters(strn, 7));
//Это второй вариант как по мне
let gh = ['Каждый', 'охотник', 'желает', 'знать'];
let itstrn = (arrstr, index) => {
    let st;
    for (i = 0; i < arrstr.length; i++) {
        if (arrstr[i].length === index) {
            st = arrstr[i];
        }
    }
    return st;
}
document.write(itstrn(gh, 7))
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
    let upstr = "HTML JavaScript PHP";
let insertdash = (str)=>{
    return  str.toUpperCase().replaceAll(' ','-');
}
document.write(insertdash(upstr))
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let raw1='каждый охотник желает знать';
let updown=(raw)=>{
    return raw[0].toUpperCase()+raw.slice(1);
}
document.writeln(updown(raw1));
//
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
