let handler = async (m, { conn, command, text, usedPrefix }) => {
let fetch = require('node-fetch')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let pp = 'https://i.imgur.com/BfsbCOR.jpg'
let menu =` 
╭━〘 🐈⚡️🐈⚡️🐈⚡️🐈⚡️🐈 〙━╮
 ‖ ֎┉┉┉⊰ 𝙂𝙖𝙩𝙖𝘽𝙤𝙩 | 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨 ⊱┉┉┉֍
 ‖ 💖 *¡𝗛ola! ${username}* 💖
 ‖    ֎┉┉┉┉┉┉⊰ 🌟 ⊱┉┉┉┉┉┉┉֍
 ‖
 ‖⇛ 🔖 _${usedPrefix}donar_
 ‖⇛ 🔖 _${usedPrefix}infobot_
 ‖⇛ 🔖 _${usedPrefix}creditos_ 
 ‖⇛ 🔖 _${usedPrefix}reglas_
 ‖⇛ 🔖 _${usedPrefix}grupos_
 ‖⇛ 🔖 _${usedPrefix}estado_
 ‖⇛ 🔖 _${usedPrefix}menusimple_
 ‖⇛ 🔖 _${usedPrefix}menuaudios_
 ‖⇛ 🔖 _${usedPrefix}instalarbot_
 ‖⇛ 🔖 _${usedPrefix}procesobot_
 ‖⇛ 🔖 _${usedPrefix}bug *tal comando con fallas*_
 ‖⇛ 🔖 _${usedPrefix}reporte *tal comando con fallas*_
 ‖⇛ 🔖 _${usedPrefix}report *tal comando con fallas*_
 ‖⇛ 🔖 _${usedPrefix}owner_
 ‖⇛ 🔖 _${usedPrefix}contacto_
 ‖⇛ 🔖 _${usedPrefix}join *enlace del grupo*_
 ‖⇛ 🔖 _${usedPrefix}unete *enlace del grupo*_ 
 ‖⇛ 🔖 _${usedPrefix}bots *ver bots*_
 ‖⇛ 🔖 _${usedPrefix}stop_
 ‖⇛ 🔖 _${usedPrefix}jadibot | serbot_
 ‖⇛ 🔖 _${usedPrefix}getcode_
 ‖⇛ 🔖 _¿Qué es un Bot?_
 ‖⇛ 🔖 _Codigos para audios_
 ‖⇛ 🔖 _Términos y condiciones_
 ‖ ➥ ⧼ *_INFORMACIÓN DEL MENÚ_* ⧽ 
╰━〘 🐈🌟🐈🌟🐈🌟🐈🌟🐈 〙━╯
𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨`.trim()
conn.send3ButtonLoc(m.chat, (await fetch(pp)).buffer(), `
⁖ᯓ፨҈༺ 𝙂𝙖𝙩𝙖𝘽𝙤𝙩 | 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨 ༻፨҈ᯓ⁖
`.trim(), menu, '🎮 𝙈𝙀𝙉𝙐 𝘿𝙀 𝙅𝙐𝙀𝙂𝙊𝙎 🎮', `#menujuego`, '🚀 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 🚀', `#menudescarga`, '🔐 𝙂𝙀𝙎𝙏𝙄𝙊𝙉 𝘿𝙀 𝙂𝙍𝙐𝙋𝙊 🔐', `#menugrupo`, m, false, { contextInfo: { mentionedJid }})}

handler.command = /^(menuinfobot|menuinfo|infomenu|menúinfobot|menúinfo)$/i
module.exports = handler
