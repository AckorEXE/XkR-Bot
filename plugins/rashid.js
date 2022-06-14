let handler = async (m, { conn, command, usedPrefix }) => {
  
let fecha = new date();
let dia = fecha.getDay();
  
switch (dia) {
  case 0:
  thrown `
  Hoy esta en venore.
  `.trim()
    break;
  case 1:
    thrown ` 
  Hoy esta en Thais.
  `.trim()
    break;
  
handler.help = ['rashid']
handler.tags = ['tools']
handler.command = /^(rashid)$/i
export default handler
