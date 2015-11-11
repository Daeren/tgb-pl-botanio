//-----------------------------------------------------
//
// Author: Daeren
// Site: 666.io
//
//-----------------------------------------------------

"use strict";

//-----------------------------------------------------

const rBotan = require("botanio");

//-----------------------------------------------------

module.exports = main;

//-----------------------------------------------------

function main(apiKey, appName) {
    let objBotan = rBotan(apiKey);

    return function(type, bot) {
        objBotan.track(bot.message, appName || "Telegram Bot");
    };
}