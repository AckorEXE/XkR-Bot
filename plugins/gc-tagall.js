let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `🔔${pesan}`
let teks = `*💢𝘔𝘈𝘚𝘚 𝘗𝘖𝘒𝘌💢*\n${oi}\n\n🧙🏻‍♂️ *𝘗𝘓𝘈𝘠𝘌𝘙𝘚:*\n`
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
