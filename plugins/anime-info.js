import fetch from 'node-fetch'
import cheerio from 'cheerio'
let handler = async (m, { conn, text }) => {
if (!text) throw `*Masukan Judul Anime Yang Ingin Kamu Cari !*\nContoh : #animeinfo hyouka`
let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/anime', { q: text }))

if (!res.ok) throw 'Not Found'
let json = await res.json()

	let { title, members, synopsis, episodes, url, rated, score, image_url, type, start_date, end_date, mal_id } = json.results[0]
let res2 = await fetch(`https://myanimelist.net/anime/${mal_id}`)
if (!res2.ok) throw 'Not Found'
let html = await res2.text()
let animeingfo = `📚 Title: ${title}
🎆 Episode: ${episodes}
✉️ Transmisi: ${type}

🌟 Rating: ${rated}
🧮 Score: ${score}
👥 Members: ${members}
💬 Sinopsis: ${synopsis}
`
conn.sendHydrated(m.chat, `*${htki} ANIME INFO ${htka}*`, animeingfo, image_url, url, '🌎 ʟ ɪ ɴ ᴋ', null, null, [[null,null],[null,null],[null,null]], m)

}
handler.help = ['animeinfo <anime>']
handler.tags = ['anime']
handler.command = /^(animeinfo)$/i

export default handler
