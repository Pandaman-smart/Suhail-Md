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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_07_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDksXG4gICAgICAgIDk0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI3LFxuICAgICAgICA1NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjksXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDY5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTE1LFxuICAgICAgICA3MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODcsXG4gICAgICAgIDc4LFxuICAgICAgICA0MCxcbiAgICAgICAgMzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDU2LFxuICAgICAgICA5MixcbiAgICAgICAgMTg3LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA5MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDg1LFxuICAgICAgICA1OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjEyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAzMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0MyxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMixcbiAgICAgICAgMzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI0LFxuICAgICAgICA5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDMzLFxuICAgICAgICAxMixcbiAgICAgICAgMTcwLFxuICAgICAgICAzNixcbiAgICAgICAgMjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNyxcbiAgICAgICAgMzksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMixcbiAgICAgICAgNzIsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQsXG4gICAgICAgIDU1LFxuICAgICAgICA1NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU2LFxuICAgICAgICA3NSxcbiAgICAgICAgODEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyLFxuICAgICAgICAxNzksXG4gICAgICAgIDc5LFxuICAgICAgICA0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTI2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDYsXG4gICAgICAgIDUwLFxuICAgICAgICAxODUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQxLFxuICAgICAgICA2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMixcbiAgICAgICAgMjQ3LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjE3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTA0LFxuICAgICAgICA5MixcbiAgICAgICAgMjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzLFxuICAgICAgICAxODIsXG4gICAgICAgIDkxLFxuICAgICAgICA0NixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExLFxuICAgICAgICAyMzYsXG4gICAgICAgIDg3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1LFxuICAgICAgICA0NCxcbiAgICAgICAgNTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODYsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRLy9rMUlnQU1xMmtWTk5lcWdlaG4wKzNFSm1PQUZ5QVRxK3h1ZkFCbWg4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzMjczNzc4NjAzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTkxQjc4RjEzMDRBMjIzOUFBOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA0NjIwNThcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiM2dGR2JCN0NTYjZXYm96UGt5N2pQQVwiLFxuICBcInBob25lSWRcIjogXCJjYTQxY2VhNC04NDEwLTRhMGMtYmY1YS05ZWJhY2UxZmRmYmNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIxLFxuICAgICAgMjA1LFxuICAgICAgOTgsXG4gICAgICAyMzYsXG4gICAgICAxNDYsXG4gICAgICAxMzUsXG4gICAgICA1LFxuICAgICAgNDcsXG4gICAgICAxNjgsXG4gICAgICA4MSxcbiAgICAgIDIxMixcbiAgICAgIDIxLFxuICAgICAgMTAwLFxuICAgICAgNzAsXG4gICAgICAxMjgsXG4gICAgICAxNDIsXG4gICAgICA3NSxcbiAgICAgIDI4LFxuICAgICAgOTgsXG4gICAgICAxODNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIwLFxuICAgICAgMjAzLFxuICAgICAgMTcyLFxuICAgICAgMTMzLFxuICAgICAgMjMzLFxuICAgICAgMTcsXG4gICAgICAxNzcsXG4gICAgICA2LFxuICAgICAgNDAsXG4gICAgICAyNTEsXG4gICAgICA2NSxcbiAgICAgIDY4LFxuICAgICAgMTIzLFxuICAgICAgMTc5LFxuICAgICAgMTQsXG4gICAgICA4NSxcbiAgICAgIDY0LFxuICAgICAgMjIzLFxuICAgICAgMTYsXG4gICAgICAxMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1OTNQRVI5SlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMyNzM3Nzg2MDM6OThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJPRyAgU01BUlQo6ZWH5LiK5pyA6IGq5piO55qE5Lq6KVwiLFxuICAgIFwibGlkXCI6IFwiMjI0Mzg2NzI0NDU0NTAwOjk4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tXZ2hjWU1FT0RWc0xRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidmI3anBsTTJWSWFUclpsWmhZemRjZElxMEQvNzBkWllZTDRGNGxvckZ3bz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI0c1Qvd1p2aEJvWVZiWkhINXlzemhiRUo2QjV5RlloOTd6TmVVWjdNVEp5Nmk3SUNKaTJlQjM4SEN6UTlFcmdPSm54akdhcSszY1JCTEFNYUtGbmhpUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJNRnIvOVJWOUFhT2YwczdVZG1takxNVXNSc1NGcjJRazZYRmtMSVBzbStaM2wzb0dvMWl4SXVYYWVmVVR0M2pKYXV4OFlpeDdYeU5LVjRrbEQ3WFppZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzI3Mzc3ODYwMzo5OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA0NjIwNTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFTlRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVOVC5qc29uIjogIntcImtleURhdGFcIjpcIjlVeDNkYmZoclFrUFBQMy84YkFLU3I1V0dOSkdZallZQ3dHMmtOL2NUaEk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzM2ODExMjE2NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNDYyMDUyMDI5XCJ9Igp9"  // PUT your SESSION_ID 


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
