let handler = async (m, { conn, command, usedPrefix }) => {

m.reply(`
*┌─〔 ＡＣＴＩＶＯ 〕*
*├ okey
*└───────────────*
`.trim())}


handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(info)$/i
export default handler

