const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_03_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDY0LFxuICAgICAgICA2MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTkzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTAxLFxuICAgICAgICA3NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjEzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjAxLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMjQzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTc0LFxuICAgICAgICA2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMixcbiAgICAgICAgODYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTcwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNSxcbiAgICAgICAgODksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNCxcbiAgICAgICAgMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1LFxuICAgICAgICAzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDg3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDgzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMyxcbiAgICAgICAgMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODcsXG4gICAgICAgIDcsXG4gICAgICAgIDY1LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDU2LFxuICAgICAgICA5NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDU0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDkxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAzOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgODQsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzNixcbiAgICAgICAgODMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTksXG4gICAgICAgIDExNSxcbiAgICAgICAgNjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTk2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDUsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkRkNlMxQ0pFcVZrTlBCa25uT210NjFiN0pVbFZWaEJKUjBnTVVRaHR5b1E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkEyazREWGIwU2FxV2h3VUlBQmszb3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjFkMWExNDUtODEzZS00YTk5LWJlNjYtNGM2MDUyOTIyZTUxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MyxcbiAgICAgIDI1LFxuICAgICAgMjEzLFxuICAgICAgMTUsXG4gICAgICAxNTksXG4gICAgICAyNTMsXG4gICAgICAzNSxcbiAgICAgIDE4NixcbiAgICAgIDMxLFxuICAgICAgMzAsXG4gICAgICAxNjMsXG4gICAgICAyNTIsXG4gICAgICA3NCxcbiAgICAgIDEwNSxcbiAgICAgIDEwNSxcbiAgICAgIDE4MCxcbiAgICAgIDIyMSxcbiAgICAgIDgyLFxuICAgICAgMTk0LFxuICAgICAgMTM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MSxcbiAgICAgIDE0OCxcbiAgICAgIDM3LFxuICAgICAgMTMyLFxuICAgICAgMTI1LFxuICAgICAgMjU0LFxuICAgICAgMTI3LFxuICAgICAgMTgyLFxuICAgICAgMTkyLFxuICAgICAgNDEsXG4gICAgICA5NyxcbiAgICAgIDIyNixcbiAgICAgIDIxMixcbiAgICAgIDQ2LFxuICAgICAgNjMsXG4gICAgICAyMDksXG4gICAgICAxMzcsXG4gICAgICAyMTcsXG4gICAgICAxMjUsXG4gICAgICAxOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVkdCSFZDN0tcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMjczNzc4NjAzOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJPRyAgU01BUlQo6ZWH5LiK5pyA6IGq5piO55qE5Lq6KVwiLFxuICAgIFwibGlkXCI6IFwiMjI0Mzg2NzI0NDU0NTAwOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnl6dDhNQkVOenZzTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ2YjdqcGxNMlZJYVRyWmxaaFl6ZGNkSXEwRC83MGRaWVlMNEY0bG9yRndvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImVNTHN1RDY2S0F5Vjh3aU9mazAwMGtvYm52R1l6Y2pISzZxakRiZXVpTE1XempQNFJvWGEwZ1NRclRnV1Q3bE52UEVOaVRBdGdHKzZoOHl2TUFsdGlnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlJucG1WZWRuclpOSzFnMnVhTi8xWTdMczdabjF5NG1IRTBOQWxZVU9ERy9hSTg0bFdkaHl3Y0NtU00wWlNPd294MXZ5SjNxOTdwOWNhRVBTUnpQYWlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMjczNzc4NjAzOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNDY1Mzc2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS21OXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLbU4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJlVnhmZzNBQUd3bmJhV2ZoTW9qYWVZNzhRejA4REp2c3RDNkNKWENBUlFBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQwOTg1MjM4MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzIwNDY1Mzc3NDY3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
