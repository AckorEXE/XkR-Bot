let handler = async (m, { conn, command, usedPrefix }) => {
let name = await conn.getName(m.sender)

m.reply(`
┌─ [ *🤖𝕏𝕜ℝ-𝔹𝕠𝕥🤖* ]
├ *👋🏻 Hola ${name},*
￨
├ 🖥️ *𝘊𝘙𝘌𝘈𝘋𝘖𝘙:*
├ *Ackor*
├ 💎 #+528251002140*_
└───────────
`.trim())}


handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(info)$/i
export default handler
