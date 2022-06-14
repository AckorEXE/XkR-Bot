let handler = async (m, { conn, command, usedPrefix }) => {
  
let fecha = new Date();
let dia = fecha.getDay();
  
if (dia === 1)
throw `
Hoy esta en venore.
`.trim()
  
let respuesta =`
(dia)
`.trim()

conn.sendHydrated(m.chat, respuesta, [], m)}

handler.help = ['rashid']
handler.tags = ['tools']
handler.command = /^(rashid)$/i
export default handler
