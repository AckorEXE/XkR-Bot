import fs from 'fs'
let handler = async (m, { conn, args }) => {
let group = m.chat
conn.reply(m.chat, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝘓𝘐𝘕𝘒 𝘋𝘌𝘓 𝘎𝘙𝘜𝘗𝘖',
body: '🤖𝕏𝕜ℝ-𝔹𝕠𝕥🤖',        
previewType: 0, thumbnail: fs.readFileSync("./Sin título-5.jpg"),
sourceUrl: ``}}})   
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^link(gro?up)?$/i
handler.group = true
handler.admin = false
handler.botAdmin = true
export default handler
