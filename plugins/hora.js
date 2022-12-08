let handler = async (m, { conn, command, usedPrefix }) => {

var date = new Date(); // creates a new Date object representing the current date and time
date.setHours(date.getHours() - 3); // subtracts three hours from the date

m.reply(date); // logs the resulting date to the console
}
    
    handler.help = ['hora']
    handler.tags = ['main']
    handler.command = /^(hora)$/i
    handler.group = true
    export default handler
