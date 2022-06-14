import fetch from 'node-fetch'
import cheerio from 'cheerio'
let handler = async (m, { conn, text }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴𝙻 𝙰𝙻𝙶𝚄𝙽 𝙰𝙽𝙸𝙼𝙴 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙴 𝙱𝚄𝚂𝙲𝙰𝚁*`
let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/anime', { q: text }))
	function checkCharName()
			{
				nameCharHttp = GetXmlHttpObject();

				if(document.getElementById("namechar").value == "")
				{
					document.getElementById("namechar_error").innerHTML = '<font color="red">Informe o nome do personagem!</font>';
					return;
				}

				var nome = document.getElementById("namechar").value;
				var server = 1;
				var url = 'inc/formChecarChar.php?server=1&name=' + nome;
				nameCharHttp.onreadystatechange = NameCharStateChanged;
				nameCharHttp.open('GET',url,true);
				nameCharHttp.send(null);
if (!res.ok) throw await res.text()
let json = await res.json()
let { title, members, synopsis, episodes, url, rated, score, image_url, type, start_date, end_date, mal_id } = json.results[0]
let res2 = await fetch(`https://www.underwar.org/?subtopic=community&page=guilds&server=1&name=Levanton`)
if (!res2.ok) throw await res2.text()
let html = await res2.text()
let animeingfo = `✨ *Titulo:* ${title}
🎆 *Episodios:* ${episodes}
💬 *Transmitido en:* ${type}
💌 *Rating:* ${nome}
❤️ *Score:* ${level}
👥 *Miembros:* ${members}
💚 *Sinopsis en inglés:* ${synopsis}
🌐 *URL*: ${url}`
conn.sendFile(m.chat, image_url, '', animeingfo, m)
}
handler.help = ['animeinfo <anime>']
handler.tags = ['internet']
handler.command = /^(animeinfo)$/i
export default handler
