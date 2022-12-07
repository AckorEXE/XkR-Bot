let handler = async (m, { conn, command, usedPrefix }) => {

var currentTime = new Date();
var formattedTime = currentTime.toLocaleString('en-US', {
  timeZoneName: 'short'
});
m.reply((formattedTime)); // Outputs the current date and time, including the time zone
}
  
handler.help = ['fecha']
handler.tags = ['main']
handler.command = /^(fecha)$/i
handler.group = true
export default handler
