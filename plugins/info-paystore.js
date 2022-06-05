let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '10,000"
let sn = '19,000'
let ss = '34,000'
let sp = '44,000'
let sv = '65'
//premium
let ph = '5,000'
let pn = '15,000
let pp = '45,000'
let pv = '65,000'
let ppm = '70'
let info = `
*${htki} SEWA ${htka}*
┏⇱ *ʜᴇᴍᴀᴛ* 
┗Rp. ${sh}k/Grup (1 minggu)

┏⇱ *ʜᴇᴍᴀᴛ 10%* 
┗Rp. ${sn}k/Grup (1 bulan)

┏⇱ *ʜᴇᴍᴀᴛ 25%* 
┗Rp. ${ss}k/Grup (2 bulan)

┏⇱ *ʜᴇᴍᴀᴛ 39%* 
┗Rp. ${sp}k/Grup (3 bulan)

──···────────────────···──

*${htki} PREMIUM ${htka}*
┏⇱ *ʜᴇᴍᴀᴛ* 
┗Rp. ${ph}k (1 minggu)

┏⇱ *ʜᴇᴍᴀᴛ 19%* 
┗Rp. ${pn}k (1 bulan)

┏⇱ *ʜᴇᴍᴀᴛ 20%* 
┗Rp. ${pp}k (3 bulan)

┏⇱ *ʜᴇᴍᴀᴛ 30%* 
┗Rp. ${pv}k (5 bulan)                                            


ᴘᴀʏᴍᴇɴᴛ
• *Pulsa:* ${ppulsa}
• *Dana:* ${pdana}
• *OVO:* ${povo}
• *Gopay:* ${pgopay}

`
const sections = [
   {
	title: `✃ sᴇᴡᴀ`,
	rows: [
	    {title: "𝗛𝗘𝗠𝗔𝗧", rowId: '.order *Paket:* HEMAT • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + sh + 'k (1 minggu)' },
	    {title: "𝗡𝗢𝗥𝗠𝗔𝗟", rowId: '.order *Paket:* NORMAL • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + sn + 'k (1 bulan)' },
	{title: "𝗦𝗧𝗔𝗡𝗗𝗔𝗥", rowId: '.order *Paket:* STANDAR • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + ss + 'k (2 bulan)' },
	{title: "𝗣𝗥𝗢", rowId: '.order *Paket:* PRO • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + sp + 'k (3 bulan)' },
	//{title: "🔖 𝗩𝗜𝗣", rowId: '.order *Paket:* VIP • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + sv + 'k (12 bulan)' },
	]
    }, {
    title: `✃ ᴘʀᴇᴍɪᴜᴍ`,
	rows: [
	    {title: "𝗛𝗘𝗠𝗔𝗧", rowId: '.order *Paket:* HEMAT • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + ph + 'k (1 minggu)' },
	    {title: "𝗡𝗢𝗥𝗠𝗔𝗟", rowId: '.order *Paket:* NORMAL • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + pn + 'k (1 bulan)' },
	{title: "𝗚𝗢𝗢𝗗", rowId: '.order *Paket:* GOOD • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + pp + 'k (3 bulan)' },
	{title: "𝗣𝗥𝗢", rowId: '.order *Paket:* PRO • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + pv + 'k (5 bulan)' },
	//{title: "🌟 𝗣𝗘𝗥𝗠𝗔𝗡𝗘𝗡𝗧", rowId: '.order *Paket:* PERMANENT • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + ppm + 'k (UNLIMITED)' },
	]
    },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "ʙ ᴜ ʏ",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
