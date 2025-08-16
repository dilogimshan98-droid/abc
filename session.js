//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0JyemsxRUNTaTlXQ2VqY2xKRlNlWXZnSjhoZEJiR2gyVjdpVTd6UVRrdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibjAwVDJBWU9uZ3BpSGRybEJBaXRibXVESEcwbTVDMk4wYXhTanlsc2Ewbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4TngxSWlHdU9tZEhwSEZ0VXI0TW1OTWFIbG1nNm9tY0kxZ0luSVpjOGtjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtdkkwSlBnZUtWS3J4aXRMNXRwNTZtVmttZWh5OTIxTnZ4TDZTRzJmRDE0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVNMmRUVk0vaFl6d1BXRTk1blgySCtiaVVRSy9iUEdLZzlXeVpuZ3pTbGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZOL1htc0xUdE9GM2Y2QUpDbmdGT3hmNGh1UlVYV0lXalJSQ3NJTzQ4eHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUh1VHpnTHZYa3Qvc0hGWDRWbHNRK2E0cldncWJ5TTFhVnJOcldUOWRHWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1hUT2x1VmtFaElIWDNMbDBaUkhpZHFTQ1B3eUZ5N1phQlNiY2NLUWpUTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdyK0loMk8yTDNSWFhKT1pXaFZkUC9SRC95dlJCRHRXQkhwSXA4aUcyRncvTW85aXRxbXovS25YbVQ4ZCtFczN6YU50c2ZneHM5bysvV3hDNkUvb0RnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQyLCJhZHZTZWNyZXRLZXkiOiJCeS9pVWpzNHpWbmJ2RWVqYWlxYkhGbnJKc1Y1NklKMEk2Q3dSZXJFS0lrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzcxMDk4NDI5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkU1NzE1MzQzMTA5QjFFRjM2OTMxMUVFOUY2MzgzQkYwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTUzMjc4ODh9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzcxMDk4NDI5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkY1MzFFNzY0RTk0QTlBMjUxOEM0QjAyNEEzQkMxOEE2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTUzMjc4ODh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImZnWFlGcFlaUlplMHR3dXp1akE5dFEiLCJwaG9uZUlkIjoiZDdmZjIwNTEtZGJkYy00MDk1LWI1NzYtMDYzNzVlZGM4MTQzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFPRDFRL3ozZlZKQ0grcjRWRW9LU0VnRTdsST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4Q2VwS1pkdndGbjNydFpNQitkZHRSUUtUWFk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSlBUSERQREsiLCJtZSI6eyJpZCI6Ijk0NzcxMDk4NDI5OjE5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6InpvbyIsImxpZCI6IjU4NDMzNzM0NzUwMzgwOjE5QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT25rcUtBR0VQL2FnTVVHR0JJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWHJBRDlkREE0NzB3ZXZEK3FpM25WL2xvdm1IbnhTYTNVS20xYm5mMDR4RT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiY1k5alRMenZNYWVwcVc3YjBGUFdwbHdLODl2UWZvODkwMFVFZ09EUk84UXZWMGFUVUd4cytDaEh0SzMydEQyUE1iUENkOEtsWlJscVRPUzY1ZHRhQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6IlNvb1NMVUQvUTVqYUZRc0hIWmEyOXNteDlzVWJQNDY4Z2JXTGlhMCtjQUdUeW9PVWZubkh0TnZjZGtzOXFYeDBUb25wbjFPS2sweEE4NWpFL1EwUUJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NzEwOTg0Mjk6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVjZ3QS9YUXdPTzlNSHJ3L3FvdDUxZjVhTDVoNThVbXQxQ3B0VzUzOU9NUiJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1MzI3ODg2LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURXTiJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "0771098429",
  PASSWORD: 
    process.env.PASSWORD || "12345dilisha",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
