// S C R I P T  O R I  B Y  @BochilGaming 🔭
// M A D E  B Y  Letta - Sama 🐰  
// Credits, jangan dihapus atau diubah!

// - - THANKS TO - -
// • Allah SWT
// • Nurutomo
// • Bochilgaming
// • Rominaru
// • Kannachann
// • The.Sad.Boy01
// • Rasel comel
// • Xtreshe (Beban)
// • Dll

//[!] Jangan Dihapus, mending ditambahin 

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'

/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
      
    
/*============== SOCIAL ==============*/

// kalo ga punya ketik "-" atau biarin aja biar ada creditsnya :v
global.sig = 'Privacy'
global.sgh = 'Privacy'
global.sgc = 'https://chat.whatsapp.com/CXh8962GOxK6cwDwLjlABw'
global.sdc = 'Privacy'
global.snh = 'Privacy'

/*============== PAYMENT ==============*/
global.pdana = '082253479547'
global.povo = '082253479547'
global.pgopay = '082253479547'
global.ppulsa = '082253479547'
global.ppulsa2 = '083143393763'
global.psaweria = 'https://saweria.co/luminousbot'

/*============== NOMOR ==============*/
global.nomorbot = '6282253479547'
global.nomorown = '6281347927862'
global.namebot = 'Luminous BOT'
global.nameown = 'Unknown'


/*============== STAFF ==============*/
global.owner = [
  ['6282253479547'],
  ['6281347927862', 'Unknown', true]
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user bukan disini nambahinnya, ketik .addprem @user 10


/*============== API ==============*/
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  botstyle: 'https://botstyle-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  kanx: 'https://kannxapi.herokuapp.com/'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'APIKEY',
  'https://anabotofc.herokuapp.com/': 'APIKEY',
  'https://api.lolhuman.xyz': 'APIKEY',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'APIKEY',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://botstyle-api.herokuapp.com': 'APIKEY',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}
// Kata APIKEY itu isi dengan apikey lu sendiri, dengan beli ke website itu

/*============== WATERMARK ==============*/
//GANTI SETERAH MU
global.wm = '              ⌬ Luminous BOT 』' //Main Watermark
global.wm2 = '⇱Luminous BOT'
global.wm3 = '⇱Luminous BOT'
global.botdate = `𝐃𝐚𝐭𝐞 ${week} ${date}`
global.bottime = `𝐓𝐢𝐦𝐞 ${wktuwib}`
global.titlebot = '⇱𝗕𝗲𝘀𝘁 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 𝗕𝗼𝘁𝘀'
global.author = '                ⌬ Luminous BOT 』'


/*============== LOGO ==============*/
// INI JUGA GANTI SETERAH MU
global.thumb = 'https://telegra.ph/file/f1af919059f9158cf2085.jpg' //Main Thumbnail
global.thumb2 = 'https://telegra.ph/file/f1af919059f9158cf2085.jpg'
global.thumbbc = 'https://telegra.ph/file/d389f4acafac741f6592c.jpg' //For broadcast
global.giflogo = 'https://telegra.ph/file/c2207b8f88fe92b41bb24.mp4'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=chrominium-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

/*============== TEXT ==============*/
global.wait = '*Chotto Matte!*\n*■■■■■□□□□□ 50%*'
global.eror = '```404ERROR```'

/*=========== TYPE DOCUMENT ===========*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'

global.thumbdoc = 'https://telegra.ph/file/8be6675bd1cb57f29409d.jpg'

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'

/*=========== HIASAN ===========*/
// DEFAULT MENU
global.dmenut = '⎔━╾━╼━❬' //top
global.dmenub = '┡•' //body XXII
global.dmenub2 = '╿' //body for info cmd on Default menu
global.dmenuf = '⎔––––––––––⎔' //footer

// COMMAND MENU
global.dashmenu = '❭━━━━╼═══⎔ *DASHBOARD* ⎔═══╾━━━━❬'
global.cmenut = '▣══════❮ '                       //top
global.cmenuh = '«««««««««'                        //header
global.cmenub = '┃◍ '                            //body
global.cmenuf = '┗══┅═┅═┅═┅═┅╴\n'                //footer
global.cmenua = '\n◀ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ▶\n     ' //after
global.pmenus = '❯'                              //pembatas menu selector

global.htki = '╼━━━━╾⇱' // Hiasan Titile (KIRI)
global.htka = ' ⇲╼━━━━╾' // Hiasan Title  (KANAN)
global.lopr = '✮' //LOGO PREMIUM ON MENU.JS
global.lolm = '✩' //LOGO FREE ON MENU.JS
global.htjava = '✇'    //hiasan Doang :v
global.hsquere = ['⛶','❏','✇']

/*============== STICKER WM ==============*/
global.stickpack = '.'
global.stickauth = `⌬ \nL\nU\nM\nI\nN\nO\nU\nS\n-\n𝗕\n𝗢\n𝗧\n✦\n\n⇲ Whatsapp BOT\nwa.me/${global.nomorbot}`

global.multiplier = 38 // The higher, The harder levelup

/*============== EMOJI ==============*/
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '📊',
      limit: '🎟️',
      health: '❤️',
      exp: '🧬',
      money: '💵',
      bank: '🏦',
      potion: '🥤',
      diamond: '💎',
      common: '🟦',
      uncommon: '🟩',
      mythic: '🟨',
      legendary: '🟧',
      superior: '🟥',
      pet: '🔖',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      pickaxe: '⛏️',
      fishingrod: '🎣',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐴',
      cat: '🐱',
      dog: '🐶',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '🪙',
      emerald: '❇️',
      upgrader: '🧰'
      
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
