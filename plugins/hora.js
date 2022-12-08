let handler = async (m, { conn, command, usedPrefix }) => {

// Create a new Date object for the current time
var date = new Date();
    
// Add three hours to the current time
date.setHours(date.getHours() - 10);
    
var currentDay = date.getDay();
    
// Print the new date and time
m.reply(currentDay);
}
    
    handler.help = ['hora']
    handler.tags = ['main']
    handler.command = /^(hora)$/i
    handler.group = true
    export default handler
