const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "TAs3nAKL#aXH9XJqZoUhe3Sn7hZnm4U85pIQdfZJIDKoINmEhnEI", // session id  
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public", //public , groups , inbox
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/sq9tvu.jpg",  // පොටෝ url
MENU_IMG: process.env.MENU_IMG || "https://files.catbox.moe/sq9tvu.jpg",  //පොටෝ url
ALIVE_MSG: process.env.ALIVE_MSG || "*😎 Hey How are you? 👻*\n\n*👊 〽️ASTER-MD Whatsapp Bot Alive Now..!*\n\n> *ᴘᴏᴡᴇʀᴅ ʙʏ  ᴋᴀᴠɪᴅᴜ ʀᴀꜱᴀɴɢᴀ : )*",
ANTI_LINK: process.env.ANTI_LINK || "false",
ANTI_BAD: process.env.ANTI_BAD || "false",
PREFIX: process.env.PREFIX || ".",
FAKE_RECORDING: process.env.FAKE_RECORDING || "false", // true හෝ false
FAKE_TYPING: process.env.FAKE_TYPING || "false",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
AUTO_REACT: process.env.AUTO_REACT || "false",
HEART_REACT: process.env.HEART_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "false",
OWNER_NUMBER: process.env.OWNER_NUMBER || "94728299192", // ඔයාගෙ නම්බර් එක
OWNER_EMOJI: process.env.OWNER_EMOJI || "🔰", // ඉමෝජි
BOT_NAME: process.env.BOT_NAME || "*〽️ASTER-MD*", // බොට් නම
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
ANTI_DELETE: process.env.ANTI_DELETE || "true",
DELETEMSGSENDTO: process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
INBOX_BLOCK: process.env.INBOX_BLOCK || "false",
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
OWNER_NAME: process.env.OWNER_NAME || "Sadesha Hansana", // නම
FOOTER: process.env.FOOTER || "> *POWERED BY 〽️ASTER FILM  👨‍💻*",
MOVIE_FOOTER: process.env.MOVIE_FOOTER || "> *〽️ASTER FILM*", //Movie footer  
};
