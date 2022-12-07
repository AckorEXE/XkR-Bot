let handler = async (m, { conn, command, text, usedPrefix }) => {

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
`.trim()

handler.command = /^(menuinfobot|menuinfo|infomenu|menúinfobot|menúinfo)$/i
module.exports = handler
