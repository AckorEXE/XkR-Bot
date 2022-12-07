let handler = async (m, { conn, command, usedPrefix }) => {

var currentTime = new Date();
m.reply(currentTime());
}

handler.help = ['fecha']
handler.tags = ['main']
handler.command = /^(fecha)$/i
handler.group = true
export default handler
