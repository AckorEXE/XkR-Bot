import fs from 'fs'
let handler = async (m, { conn, args }) => {
const day = [
    {"day": "Domingo", "local": "Carlin"},
    {"day":"Lunes", "local":"Svargrond"},
    {"day":"Martes", "local":"Liberty Bay"},
    {"day":"Miércoles", "local":"Port Hope"},
    {"day":"Jueves", "local": "Ankrahmun"},
    {"day":"Viernes", "local":"Darashia"},
    {"day":"Sábado", "local": "Edron"}
]

const date = new Date();
console.log(date.getUTCDay())

days.forEach((e, i) => {
    if(i == date.getUTCDay()){
        conn.reply(`Rashid at ${e.local} - ${e.day}`)
    }
})

handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^ups(gro?up)?$/i
handler.group = true
handler.admin = false
handler.botAdmin = true
export default handler
