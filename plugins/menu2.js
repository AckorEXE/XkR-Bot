let handler = async (m, { conn, command, usedPrefix }) => {
let picture = './Menu1.jpg'
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado =`
╭─[ *🤖𝕏𝕜ℝ-𝔹𝕠𝕥🤖* ]
│ *👋 Hola ${name},*
|
│ ⭐ *𝘔𝘌𝘕𝘜 𝘋𝘌𝘓 𝘉𝘖𝘛:*
│ 💎 #mp _*<texto>*_
│ 💎 #add _*<número>*_
│ 💎 #kick _*<número>*_
│ 💎 #gc _*<open / close>*_
│ 💎 #link
│ 💎 #estado
│ 💎 #tts _*<texto>*_
╰──────────
`.trim()

conn.sendHydrated(estado, picture)}

handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(min)$/i
export default handler


function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
