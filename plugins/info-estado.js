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
│ ⭐ *𝘌𝘚𝘛𝘈𝘋𝘖 𝘋𝘌𝘓 𝘉𝘖𝘛:*
│ ✅ BOT ACTIVO
│ 🕓 TIEMPO ACTIVO: *${uptime}*
╰──────────
`.trim()

conn.sendHydrated(m.chat, estado, wm, picture, 'https://wa.me/528251002140/?text=Hola%20me%20interesa%20t%C3%BA%20servicio%20de%20bot.', 'CONTACTO', null, null, [], m)}

handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(estado)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
