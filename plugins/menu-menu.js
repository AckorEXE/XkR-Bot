let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu1.jpg'

let menu = `
╭══〘 ✯✯✯✯✯✯✯✯ 〙═╮
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
╰══╡✯✯✯✯✯✯✯✯╞══╯
┏━━━━━━━━━━━━━┓
abalbal
`.trim()

conn.sendMessage(m.chat, m)
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu)$/i
module.exports = handler
