import fs from 'fs'
let handler = async (m, { conn, args }) => {
let group = m.chat
conn.reply(m.chat, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '*ðððð ððð ððððð*',
body: 'ð¤ððâ-ð¹ð ð¥ð¤',        
previewType: 0, thumbnail: fs.readFileSync("./Sin tÃ­tulo-5.jpg"),
sourceUrl: ``}}})   
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^link(gro?up)?$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
