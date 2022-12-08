let handler = async (m, { conn, command, usedPrefix }) => {

    // Obten la fecha actual
    let date = new Date();

    // A la fecha actual restale 10 horas
    date.setHours(date.getHours() - 10);

    // Obten el dia de la semana basandote en la nueva hora
    let dayOfWeek = date.getDay();

    // Imprime el dia de la semana en un caso switch usando la nueva hora
    let dayName;
    switch (dayOfWeek) {
        case 0:
            dayName = "*Domingo*, lo puedes encontrar en el depot de Carlin, un piso arriba.";
            break;
        case 1:
            dayName = "*Lunes*, lo puedes encontrar en Svargrond, en la taberna de Dankwart, al sur del templo.";
            break;
        case 2:
            dayName = "*Martes*, lo puedes encontrar en Liberty Bay, en la taberna de Lyonel, oeste del depot.";
            break;
        case 3:
            dayName = "*Miércoles*, lo puedes encontrar en Port Hope, en la taberna de Clyde, al norte del barco.";
            break;
        case 4:
            dayName = "*Jueves*, lo puedes encontrar en Ankrahmun, en la taberna de Arito, sobre la oficina postal.";
            break;
        case 5:
            dayName = "*Viernes*, lo puedes encontrar en Darashia, en la taberna de Miraia, al sur de las guildhalls.";
            break;
        case 6:
            dayName = "*Sábado*, lo puedes encontrar en Edron, en la taberna de Mirabell, sobre el depot.";
            break;
    }

    // Envia el dia 
    m.reply(dayName);
}

handler.help = ['rashid']
handler.tags = ['main']
handler.command = /^(rashid)$/i
handler.group = true
export default handler
