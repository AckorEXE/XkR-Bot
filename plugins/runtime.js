let handler = async (m, { conn, command, usedPrefix }) => {

m.reply(`
*┌─〔 ＡＣＴＩＶＯ 〕*
*├ 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: *
*└───────────────*
`.trim())}

handler.help = ['runtime']
handler.tags = ['info']
handler.command = /^(uptime|runtime)$/i
module.exports = handler

