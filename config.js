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
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94743491027";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_12_53_06_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTczLFxuICAgICAgICA5NCxcbiAgICAgICAgMTYyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjI5LFxuICAgICAgICA4MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzksXG4gICAgICAgIDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MixcbiAgICAgICAgMjExLFxuICAgICAgICA3MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ2LFxuICAgICAgICA1MixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUyLFxuICAgICAgICAwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTksXG4gICAgICAgIDU2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyMixcbiAgICAgICAgODcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTUwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0LFxuICAgICAgICAyNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTgsXG4gICAgICAgIDk0LFxuICAgICAgICA4MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTM2LFxuICAgICAgICA0OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYwLFxuICAgICAgICA2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDUyLFxuICAgICAgICA5MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDQxLFxuICAgICAgICAzNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzksXG4gICAgICAgIDI2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDExMixcbiAgICAgICAgNzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTYzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDMxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU4LFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDc1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTczLFxuICAgICAgICA1MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTExLFxuICAgICAgICA5NixcbiAgICAgICAgOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIllBRmZKSEhSWGJBTVNRMWtmOHdhUEl6bEszTU1HdStWVUFRcXg4MEVDc1E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlRzY3NYaFFvU2tPZmhnSFVVUVg2amdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDQ1NmJiMGYtYTRjNy00M2MwLThhZWUtZDkzODNjM2IzNjJjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NixcbiAgICAgIDI0NyxcbiAgICAgIDIxOCxcbiAgICAgIDIzNyxcbiAgICAgIDEzLFxuICAgICAgNjcsXG4gICAgICAxMTQsXG4gICAgICAxMDIsXG4gICAgICAxMTYsXG4gICAgICAzOSxcbiAgICAgIDI0OSxcbiAgICAgIDEyNixcbiAgICAgIDI0OSxcbiAgICAgIDYsXG4gICAgICAxOTYsXG4gICAgICAxMjgsXG4gICAgICAxMDUsXG4gICAgICAzNixcbiAgICAgIDI1LFxuICAgICAgNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAsXG4gICAgICA2NixcbiAgICAgIDk0LFxuICAgICAgMTE1LFxuICAgICAgMjA4LFxuICAgICAgMTg4LFxuICAgICAgMTI4LFxuICAgICAgMTg4LFxuICAgICAgMTksXG4gICAgICA1NSxcbiAgICAgIDEzNixcbiAgICAgIDE1OSxcbiAgICAgIDE0LFxuICAgICAgMjU1LFxuICAgICAgMjQ5LFxuICAgICAgMjIsXG4gICAgICAxMixcbiAgICAgIDcsXG4gICAgICA5NyxcbiAgICAgIDIxM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZRVJHNFlEUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NDM0OTEwMjc6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkNob0NPIGF2aSBUZWFtXCIsXG4gICAgXCJsaWRcIjogXCI5NTMzNTg1ODg2NDIwNjoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xuT2tLUUhFTnpBdTdNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMGMycjFIMElrdWZCdGNEOFF4V2wvNnRiWDJnUmtGcWZXbEcrODlVYWJEZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxQjEwNlZ0WmtiV013L2l5Z29NU2Z1dDlOSXJBOXFHakQzS3A4eGZMaTJNRkhUNVRZdzN5UFozMlhud0svdlR5SXBjMVE0WnRLelBUVmI0ZFdUeDRCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJTOVUraU41VGpOVTUxdnNHdlN5cEthai9pblhSaUxLbjdqL3ZKRlZ0bDJ1Rm83RnJjZWFCOUxlQ2dGTTNKcXhTdEV5ZEtqdFdZMnptUE9RUVA3R2VBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc0MzQ5MTAyNzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NTQyNDMwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
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
