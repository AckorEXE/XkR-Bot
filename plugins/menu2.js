let handler = async (m, { conn }) => {
m.reply(`
En desarrollo 
`)
}
handler.command = /^(info)$/i
module.exports = handler
