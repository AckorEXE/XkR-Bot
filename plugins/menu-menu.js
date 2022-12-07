let handler = async (m, { conn, command, usedPrefix }) => {


let estado =`
╭─[ *:robot:𝕏𝕜ℝ-𝔹𝕠𝕥:robot:* ]
│ 
|
│ :star: *𝘔𝘌𝘕𝘜 𝘋𝘌𝘓 𝘉𝘖𝘛:*
│ :gem: #mp _*<texto>*_
│ :gem: #add _*<número>*_
│ :gem: #kick _*<número>*_
│ :gem: #gc _*<open / close>*_
│ :gem: #link
│ :gem: #estado
│ :gem: #tts _*<texto>*_
╰──────────
`.trim()

conn.sendHydrated(m.chat, estado, wm, null, null, null, null, m)}

handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu)$/i
export default handler


