let handler = async m => m.reply(`
        [DONASI]
ASIX:083191632340
GOPAY:6283191632340

JANGAN LUPA FOLLOW @dutavector 
BIAR BOT ON TERUS✓

`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
