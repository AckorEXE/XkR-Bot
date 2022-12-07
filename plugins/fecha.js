let handler = async (m, { conn, command, usedPrefix }) => {

var currentTime = new Date();
m.reply(date); // Outputs the current date and time, including the time zone
}
  
handler.help = ['fecha']
handler.tags = ['main']
handler.command = /^(fecha)$/i
handler.group = true
export default handler
