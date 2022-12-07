let handler = async (m, { conn, command, usedPrefix }) => {

var currentDate = new Date();
var dateString = currentDate.toDateString();
m.reply((dateString)); // Outputs the current date in the format "Month Day, Year"
}
  
handler.help = ['fecha']
handler.tags = ['main']
handler.command = /^(fecha)$/i
handler.group = true
export default handler
