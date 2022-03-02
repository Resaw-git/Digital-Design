function getDayInfo(date) {
//определяем масив с русскими днями недель и месяцев, где индекс масива соответствует номеру месяца
const getWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
const getMonth = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']

//в JS new Date() парсит строку в дату как MM.ДД.ГГГГ
//с помощью регулярного выражения меняем местами месяцы и дни
//и вызываем new Date()
let month = /^[0-9]+/.exec(date)[0]
let day = /\.[0-9]+\./.exec(date)[0]
day = day.replaceAll('.', '')
let year = /[0-9]+$/.exec(date)[0]
let newDate = new Date(day + '.' + month + '.' + year)

//английский формат недели начаниется с воскресенья, под индексом масива[0]
//исправляем на русский формат
//это необходимо для функции подсчёта недель в месяце
function getRightWeek(week) {
    if (week == 0) {
        return 7
    }
    else {
        return week
    }
}

//подсчёт недель в месяце
//на вход функции принимаем число месяца(day) и номер недели(week)
//считаем сколько дней до конца недели(endWeek)
//если сумма чисел "день месяца" и "дней до конца недели"
//меньше дней в [1,2,3,4] недели, то возвращаем эту неделю
//при 5 неделе сумма не может быть больше 35, но т.к в месяце всего 31 день
//сделал проверку до >= 31  
function getNumberOfWeek(day, week) {
    let countWeek
    let endWeek = 7 - week
    if (day+endWeek<7) {
        countWeek = 1
    }
    else if (day+endWeek<14) {
        countWeek = 2
    }
    else if (day+endWeek<21) {
        countWeek = 3
    }
    else if (day+endWeek<28) {
        countWeek = 4
    }
    else if (day+endWeek>=31) {
        countWeek = 5
    }
    return countWeek
}

//вызываем передыдущую функцию и записываем результат в переменную
let week = getNumberOfWeek(newDate.getDate(), getRightWeek(newDate.getDay()))

//проверяем и возвращаем результат
if (new Date(newDate) == 'Invalid Date') {
    return 'Неверно введена дата. Необходимо ввести дату в формате: ДД.ММ.ГГГГ'
}
else {
    return `${getWeek[newDate.getDay()]}, ${week} неделя ${getMonth[newDate.getMonth()]} ${newDate.getFullYear()} года`
}

}

//P.S получилось слишком сложно, можно оптимизировать, не нравится функция подсчёта недели
//есть баг при 30 31 дне месяца JS сам не определяет сколько в месяце дней и просто меняет месяц на следующий
console.log(getDayInfo('6.01.2021')) 
console.log(getDayInfo('08.12.2022')) 




