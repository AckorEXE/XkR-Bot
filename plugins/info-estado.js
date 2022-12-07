let handler = async (m, { conn, command, usedPrefix }) => {
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)

m.reply(`
┌─ [ *🤖𝕏𝕜ℝ-𝔹𝕠𝕥🤖* ]
├ *👋🏻 Hola ${name},*
￨
├ ⭐ *𝘌𝘚𝘛𝘈𝘋𝘖 𝘋𝘌𝘓 𝘉𝘖𝘛:*
├ ✅ BOT ACTIVO
├ 🕓 TIEMPO: *${uptime}*
├ 🖥️ *𝘊𝘙𝘌𝘈𝘋𝘖𝘙:*
├ *👑 Ackor*
├ 📞 *𝘊𝘖𝘕𝘛𝘈𝘊𝘛𝘖:*
├ +528251002140
└───────────
`.trim())}


handler.help = ['info']
handler.tags = ['main']
handler.command = /^(info)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
