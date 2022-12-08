let handler = async (m, { conn, command, usedPrefix }) => {

// Create a new Date object for the current time
var date = new Date();
    
// Add three hours to the current time
date.setHours(date.getHours() - 10);

var currentDay = date.getDay();
    
    let message;
    
    if (currentDay === 0) {
    message = "*Domingo*, lo puedes encontrar en el depot de Carlin, un piso arriba.";
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
     
      
    m.reply(message + date.toString());
    }
    
    handler.help = ['hora']
    handler.tags = ['main']
    handler.command = /^(hora)$/i
    handler.group = true
    export default handler
