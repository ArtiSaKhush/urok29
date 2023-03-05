let imya = prompt('Введите свое имя: ');
let birth = prompt('Введите год рождения: ');
let year = prompt('Введите нынешний год: ');

function age() {
    let asd = year - birth;
    return asd 
}
console.log(`${imya}, Ваш возраст ${age()} лет`);
