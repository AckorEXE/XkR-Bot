let handler = async (m, { conn, command, usedPrefix }) => {

let estado =`
╭─[ *🤖𝕏𝕜ℝ-𝔹𝕠𝕥🤖* ]
│ *👋🏻 Hola ${name},*
|
│ ⭐ *𝘔𝘌𝘕𝘜 𝘋𝘌𝘓 𝘉𝘖𝘛:*
│ 💎 #mp _*<texto>*_
│ 💎 #add _*<número>*_
│ 💎 #kick _*<número>*_
│ 💎 #gc _*<open / close>*_
│ 💎 #link
│ 💎 #estado
│ 💎 #tts _*<texto>*_
╰──────────
`.trim()

handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu)$/i

