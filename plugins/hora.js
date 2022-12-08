let handler = async (m, { conn, command, usedPrefix }) => {

let date = new Date();
date.setHours(date.getHours() - 11);
let dayOfWeek = date.getDay();

// Get the name of the day of the week
let dayName;
switch (dayOfWeek) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
}


m.reply(dayName);
}
    
    handler.help = ['hora']
    handler.tags = ['main']
    handler.command = /^(hora)$/i
    handler.group = true
    export default handler
