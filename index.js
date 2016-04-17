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
    const objBotan = rBotan(apiKey);

    return function(bot) {
        const msg = bot.message;

        if(msg) {
            objBotan.track(msg, appName || "Telegram Bot");
        }
    };
}