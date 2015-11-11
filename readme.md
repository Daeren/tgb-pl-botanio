```
npm install tgb-pl-botanio
```

```js
const rBot          = require("telegram-bot-api-c"),
      rTgbPlBotanio = require("tgb-pl-botanio");

let srv = rBot("TOKEN")
    .polling()
    .use(rTgbPlBotanio("apiKey1", "appName1"))
    .use(rTgbPlBotanio("apiKey2", "appName2"));
	
srv.on("*", bot => { bot.data.text = "Hi"; bot.send(); });
```


[telegram-bot-api-c][3]
[Botan SDK][4]



## License

MIT

----------------------------------
[@ Daeren][1]
[@ Telegram][2]


[1]: http://666.io
[2]: https://telegram.me/io666
[3]: https://npmjs.com/package/telegram-bot-api-c
[4]: https://github.com/botanio/sdk#js