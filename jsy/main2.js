function rand(min,max) {
    return Math.floor(Math.random() * (max + 1 - min) + min )
}

let kolvo = +prompt('Введите количество примеров ')
let min = +prompt('Введите минимальное значение ');
let max = +prompt('Введите максимальное значение ');    

for (let i = 0; i < kolvo; i++) {
    let one = rand(min,max);  
    let two = rand(min,max);  
    let znak = rand(1,4);
    
    if (znak == 1) {
        let primer = +prompt(`${one} + ${two} = `);
        let otvet = primer == (one + two) ? ', молодец' : ', ошибка';
        alert( `${one} + ${two} = ${one + two}. Ваш ответ: ${primer}${otvet} ` )
    }else if (znak == 2) {
        let primer = +prompt(`${one} - ${two} = `);
        let otvet = primer == (one - two) ? ', молодец' : ', ошибка';
        alert( `${one} - ${two} = ${one - two}. Ваш ответ: ${primer}${otvet} ` )
    }else if (znak == 3) {
        let primer = +prompt(`${one} * ${two} = `);
        let otvet = primer == (one * two) ? ', молодец' : ', ошибка';
        alert( `${one} * ${two} = ${one * two}. Ваш ответ: ${primer}${otvet} ` )
    }else if (znak == 4) {
        let primer = +prompt(`${one} / ${two} = `);
        let otvet = primer == (one / two) ? ', молодец' : ', ошибка';
        alert( `${one} / ${two} = ${one / two}. Ваш ответ: ${primer}${otvet} ` )
    }  
}