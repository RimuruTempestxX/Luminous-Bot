import { canLevelUp } from '../lib/levelling.js'
export function before(m) {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++

    if (before !== user.level) {
        m.reply(`
Congratulations, Anata Telah Naik Level!
*${before}* ➣ *${user.level} 🔰*

Gunakan *.profile* Untuk Mengecek
	`.trim())
    }
}
export const disabled = true