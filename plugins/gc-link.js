import fs from 'fs'
let handler = async (m, { conn, args }) => {
let group = m.chat
conn.reply(m.chat, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝕃𝕀ℕ𝕂 𝔻𝔼𝕃 𝔾ℝ𝕌ℙ𝕆',
body: '🤖𝕏𝕜ℝ-𝔹𝕠𝕥🤖 ',        
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: ``}}})   
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^link(gro?up)?$/i
handler.group = true
handler.admin = false
handler.botAdmin = true
export default handler
