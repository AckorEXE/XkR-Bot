let handler = async (m, { conn, command, usedPrefix }) => {

var date = new Date("10.00 CET");

var dayOfWeek = date.getDay();

var dayNames = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado"];
var dayName = dayNames[dayOfWeek];

m.reply("El día de la semana a las 10.00 CET es: " + dayName());
}

handler.help = ['rashid']
handler.tags = ['main']
handler.command = /^(rashid)$/i
handler.group = true
export default handler
