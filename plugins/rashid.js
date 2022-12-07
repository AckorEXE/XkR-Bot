let handler = async (m, { conn, command, usedPrefix }) => {

  
const date = new Date();
const currentDay = date.getDay();

let message;

if (currentDay === 0) {
message = "It's Sunday! Time for some rest and relaxation.";
} else if (currentDay === 1) {
message = "It's Monday! Time to start the week off right.";
} else if (currentDay === 2) {
message = "It's Tuesday! Keep pushing through the week.";
} else if (currentDay === 3) {
message = "It's Wednesday! Halfway there!";
} else if (currentDay === 4) {
message = "It's Thursday! Almost there!";
} else if (currentDay === 5) {
message = "It's Friday! TGIF!";
} else if (currentDay === 6) {
message = "It's Saturday! Time to have some fun!";
}
 

m.reply(message);
}



handler.help = ['rashid']
handler.tags = ['main']
handler.command = /^(rashid)$/i
handler.group = true
export default handler
