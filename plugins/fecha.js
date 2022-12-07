let handler = async (m, { conn, command, usedPrefix }) => {

var currentDate = new Date();
date.setTimezoneOffset(-480)

// Use the toLocaleString() method to format the date and time
// in a more human-readable way
m.reply(currentDate.toLocaleString());
}

handler.help = ['fecha']
handler.tags = ['main']
handler.command = /^(fecha)$/i
handler.group = true
export default handler
