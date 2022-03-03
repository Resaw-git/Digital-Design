function getDayInfo(date) {
const arrWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
const arrMonth = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']

//в JS new Date() парсит строку в дату как MM.ДД.ГГГГ
//с помощью регулярного выражения меняем местами месяцы и дни
//и вызываем new Date()
const month = /^[0-9]+/.exec(date)[0]
const day = /\.[0-9]+\./.exec(date)[0].replaceAll('.', '')
const year = /[0-9]+$/.exec(date)[0]
const newDate = new Date(day + '.' + month + '.' + year)

//английский формат недели начаниется с воскресенья
//исправляем на русский формат
function getRightWeek(week) {
    if (week == 0) {
        return 7
    }
    else {
        return week
    } 
}

function getNumberOfWeek(day, week) {
    const arr = [0,7,14,21,28,35] //максимальное число на котором может закончится неделя
    const num = day+(7 - week) //число на котором заканчивается неделя
    let countWeek = 0
    for (let i = 0; i<arr.length; i++) {
        if (num > arr[i]) {
            countWeek++
        }
    }
    return countWeek
}

const week = getNumberOfWeek(newDate.getDate(), getRightWeek(newDate.getDay()))

if (new Date(newDate) == 'Invalid Date') {
    return 'Неверно введена дата. Необходимо ввести дату в формате: ДД.ММ.ГГГГ'
}
else {
    return `${arrWeek[newDate.getDay()]}, ${week} неделя ${arrMonth[newDate.getMonth()]} ${newDate.getFullYear()} года`
}

}

console.log(getDayInfo('30.5.2022')) 




