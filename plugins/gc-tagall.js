let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `š${pesan}`
let teks = `*š¢šššš ššššš¢*\n${oi}\n\nš§š»āāļø *šššš ššš:*\n`
for (let mem of participants) {
teks += `ā£ā„ @${mem.id.split('@')[0]}\n`}
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(mp)$/i
handler.admin = true
handler.group = true
export default handler
