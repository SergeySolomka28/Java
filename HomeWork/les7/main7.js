// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function  Adduser(id, name, surname, email, phone){

    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
}

let user0 = new Adduser(2, 'Stepan', 'djekdn', 'jsjjj@jj', 380556043434);
let user2 = new Adduser(36, 'Nina', 'Ola', 'ddf@gmail.com', 30680000003);
let user3 = new Adduser(43, 'Stepan', 'Btn', 'gtr@gmail.com', 30680000004);
let user4 = new Adduser(5, 'Stecia', 'Luziv', 'sde@gmail.com', 30680000005);
let user5 = new Adduser(61, 'Stepan', 'Misko', 'ashh@gmail.com', 30680044006);
let user6 = new Adduser(73, 'Yozef', 'Lig', 'uj7@gmail.com', 30680004056);
let user7 = new Adduser(7, 'Dima', 'Liga', 'gfg@gmail.com', 30680000007);
let user8 = new Adduser(8, 'kolya', 'Higa', 'rww@gmail.com', 30680032007);
let user9 = new Adduser(21, 'Petya', 'Lifa', 'ytgg@gmail.com', 30680000022);
let arrusers = [user0, user1, user2, user3, user4, user5, user6, user7, user8, user9];
console.log(arrusers);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filter = arrusers.filter((item) => {
    if (item.id % 2 === 0) {
        return item;
    }

});
console.log(filter);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

arrusers.sort((a, b) => a.id - b.id)
console.log(arrusers.sort());
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class AddClient {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let client = new AddClient(22, 'Kolya', 'Petrov', 'Petrov@gmail.com', 380965212345, ['candy', 'book', 'car']);
let client1 = new AddClient(22, 'Vika', 'Usin', 'Usin@gmail.com', 380993216545, ['candy', 'meat']);
let client2 = new AddClient(22, 'Petro', 'Waster', 'Waster@gmail.com', 380653212345, ['candy', 'table', 'car']);
let client3 = new AddClient(22, 'Gena', 'Grey', 'Grey@gmail.com', 380993216545, ['car']);
let client4 = new AddClient(22, 'Ulya', 'Bol', 'Bol@gmail.com', 380993212365, ['candy', 'book']);
let client5 = new AddClient(22, 'Vitali', 'Vujif', 'Vujif@gmail.com', 380965002345, ['book', 'car']);
let client6 = new AddClient(22, 'Roma', 'Filatov', 'Filatov@gmail.com', 380993872345, ['car']);
let client7 = new AddClient(22, 'Kolya', 'Derewin', 'Derewin@gmail.com', 380998722345, ['candy', 'book', 'car']);
let client8 = new AddClient(22, 'Vasya', 'Soldatik', 'Soldatik@gmail.com', 380872212345, ['candy', 'book', 'car', 'iphone']);
let client9 = new AddClient(22, 'Kolya', 'Ivanov', 'Ivanov@gmail.com', 380993287245, ['book', 'laptoop']);


console.log(client);
let arrclient = [client, client1, client2, client3, client4, client5, client6, client7, client8, client9];
console.log(arrclient);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(arrclient.sort((a,b)=>a.order.length-b.order.length));