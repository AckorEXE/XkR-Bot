let handler = async (m, { conn, command, usedPrefix }) => {
let name = await conn.getName(m.sender)

m.reply(`
┌─ [ *🤖𝕏𝕜ℝ-𝔹𝕠𝕥🤖* ]
├ *👋🏻 Hola ${name},*
￨
├ ⭐ *𝘔𝘌𝘕𝘜 𝘋𝘌𝘓 𝘉𝘖𝘛:*
├ 💎 #mp _*<texto>*_
├ 💎 #add _*<número>*_
├ 💎 #kick _*<número>*_
├ 💎 #gc _*<open / close>*_
├ 💎 #link
├ 💎 #estado
├ 💎 #tts _*<texto>*_
└───────────
`.trim())}


handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
