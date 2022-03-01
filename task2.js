function getDayInfo(str) {
let day = str[0]+str[1]
let month = str[3]+str[4]
let year = str[6]+str[7]+str[8]+str[9]
const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
return {day, month, year}

}

console.log(getDayInfo('1.3.2022')); 


