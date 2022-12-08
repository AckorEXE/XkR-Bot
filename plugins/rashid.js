let handler = async (m, { conn, command, usedPrefix }) => {


    
    // Create a new Date object for the current time in CET
var date = new Date(null, null, null, null, null, null, null);

// Get the current date and time
var year = date.getFullYear();
var month = date.getMonth(); // 0-11
var day = date.getDate();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

// Print the current date and time
m.reply("Current date and time (CET): " + year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds);
}
    
    let message;
    
    if (currentDay === 0) {
    message = "*Domingo*, lo puedes encontrar en el depot de Carlin, un piso arriba";
    } else if (currentDay === 1) {
    message = "*Lunes*, lo puedes encontrar en Svargrond, en la taberna de Dankwart, al sur del templo.";
    } else if (currentDay === 2) {
    message = "*Martes*, lo puedes encontrar en Liberty Bay, en la taberna de Lyonel, oeste del depot.";
    } else if (currentDay === 3) {
    message = "*Miércoles*, lo puedes encontrar en Port Hope, en la taberna de Clyde, al norte del barco.";
    } else if (currentDay === 4) {
    message = "*Jueves*, lo puedes encontrar en Ankrahmun, en la taberna de Arito, sobre la oficina postal.";
    } else if (currentDay === 5) {
    message = "*Viernes*, lo puedes encontrar en Darashia, en la taberna de Miraia, al sur de las guildhalls.";
    } else if (currentDay === 6) {
    message = "*Sábado*, lo puedes encontrar en Edron, en la taberna de Mirabell, sobre el depot.";
    }
     
      
    m.reply(message);
    
    
    handler.help = ['rashid']
    handler.tags = ['main']
    handler.command = /^(rashid)$/i
    handler.group = true
    export default handler
