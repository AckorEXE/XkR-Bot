let handler = async (m, { conn, args, usedPrefix, command }) => {
let isClose = { // Switch Case Like :v
'abierto': 'not_announcement',
'cerrado': 'announcement',
'open': 'not_announcement',
'close': 'announcement',
}[(args[0] || '')]
if (isClose === undefined)
throw `
*[❗] 𝙵𝙾𝚁𝙼𝙰𝚃𝙾 𝙴𝚁𝚁𝙾𝙽𝙴𝙾!!*
*┏━━━❲ ✨𝙴𝙹𝙴𝙼𝙿𝙻𝙾✨ ❳━━━┓* 
*┠┉↯ ${usedPrefix + command} abrir*
*┠┉↯ ${usedPrefix + command} cerrar*
`.trim()
await conn.groupSettingUpdate(m.chat, isClose)
{m.reply('*[✔] 𝘎𝘙𝘜𝘗𝘖 𝘊𝘖𝘕𝘍𝘐𝘎𝘜𝘙𝘈𝘋𝘖 𝘊𝘖𝘙𝘙𝘌𝘊𝘛𝘈𝘔𝘌𝘕𝘛𝘌.*')}
}
handler.help = ['gc open / close']
handler.tags = ['gc']
handler.command = /^(gc)$/i
handler.admin = true
handler.botAdmin = true
export default handler
