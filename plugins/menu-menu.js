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
β­β[ *π€ππβ-πΉπ π₯π€* ]
β *π Hola ${name},*
|
β β­ *ππππ πππ πππ:*
β π #mp _*<texto>*_
β π #add _*<nΓΊmero>*_
β π #kick _*<nΓΊmero>*_
β π #gc _*<open / close>*_
β π #link
β π #estado
β π #tts _*<texto>*_
β°ββββββββββ
`.trim()

conn.sendHydrated(m.chat, estado, wm, picture, 'https://wa.me/528251002140/?text=Hola%20me%20interesa%20t%C3%BA%20servicio%20de%20bot.', 'CONTACTO', null, null, [], m)}

handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu)$/i
export default handler


function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
