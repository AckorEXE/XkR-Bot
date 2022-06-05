let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*𝕄𝔼ℕ𝕊𝔸𝕁𝔼:* ${pesan}`
let teks = `*💥𝕄𝔸𝕊𝕊 ℙ𝕆𝕂𝔼💥*\n\n⭐ ${oi}\n\n🧙‍♂️ *ℙ𝕃𝔸𝕐𝔼ℝ𝕊:*\n`
for (let mem of participants) {
teks += `┣➥ @${mem.id.split('@')[0]}\n`}
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(mp)$/i
handler.admin = true
handler.group = true
export default handler
