```
npm install tgb-pl-botanio
```

```js
const rTgBot        = require("telegram-bot-api-c"),
      rTgPlBotanio  = require("tgb-pl-botanio");

const gBot          = rTgBot("TOKEN");

//--------------]>

gBot
    .polling()

    .use(rTgPlBotanio("apiKey1"))
    .use(rTgPlBotanio("apiKey2", "appName"))

    .use("text", bot => { bot.answer().text("Hi").send(); });
```


* [telegram-bot-api-c][3]
* [Botan SDK][4]



## License

MIT

----------------------------------
[@ Daeren][1]
[@ Telegram][2]


[1]: http://666.io
[2]: https://telegram.me/io666
[3]: https://npmjs.com/package/telegram-bot-api-c
[4]: https://github.com/botanio/sdk#js