import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak ditemukan'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendHydrated(m.chat, `
*${htki} PLAY ${htka}*

${htjava} *Title:* ${title}
๐ค *Published:* ${publishedTime}
โฐ *Duration:* ${durationH}
๐๏ธ *Views:* ${viewH}

๐ *Url:* ${url}
๐ *Description:* ${description}
  `.trim(), wm, thumbnail, url, 'โคด๏ธ GO TO YOUTUBE', null, null, [
    ['๐ถ Audio', `${usedPrefix}yta ${url} yes`],
    ['๐ฅ Video', `${usedPrefix}ytv ${url} yes`],
    ['๐ Youtube Search', `${usedPrefix}yts ${url}`]
  ], m)
}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i

handler.exp = 0
handler.limit = 1
handler.register = true

export default handler