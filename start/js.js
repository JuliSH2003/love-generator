const firstName = prompt ("Напишите первое имя"); 
const secondName = prompt ("Напишите второе имя");
const randomNumber = (Math.floor(Math.random()) * 100);

if (randomNumber < 33) {
    alert (`Результат совместимости имен ${firstName} и ${secondName} равен ${randomNumber} вам нужно поискать человека с другим именем.`)
} else if (randomNumber >= 33 && randomNumber < 60){
    alert (`Результат совместимости имен ${firstName} и ${secondName} равен ${randomNumber}Совместимость хорошая, но может быть и лучше.`)
} else if (randomNumber >= 60){
    alert (`Результат совместимости имен ${firstName} и ${secondName} равен ${randomNumber} Вы идеально подходите друг к другу.`)
} else {
    alert (`Упс.. какое-то странное число получилось. Попробуйте еще раз.`)
}

