let handler = async (m, { conn, command, usedPrefix }) => {

    const date = new Date();
    const currentDay = date.getDay();
    
    
    console.log(event.getUTCDate());
// expected output: 20

event.setUTCDate(19);

console.log(event.getUTCDate());
// expected output: 19

    
    
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
    }
    
    handler.help = ['rashid']
    handler.tags = ['main']
    handler.command = /^(rashid)$/i
    handler.group = true
    export default handler
