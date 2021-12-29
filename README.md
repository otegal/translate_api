# translate_api
transrate by Google Apps Script.

## How to use
ex) default. (en to ja)
```sh
$ curl -d '{"text": "bitcoin" }' -L https://script.google.com/macros/s/XXXXXXXXXXXXXXXXXXXXXXXXXXX/exec
> {"status":"OK","translated":"ビットコイン","source_text":"bitcoin","source_lang":"en","target_lang":"ja"}
```

ex) en to ja
```sh
$ curl -d '{"text": "Hello World!!", "source_lang": "en", "target_lang": "ja" }' -L https://script.google.com/macros/s/XXXXXXXXXXXXXXXXXXXXXXXXXXX/exec
> {"status":"OK","translated":"こんにちは世界！！","source_text":"Hello World!!","source_lang":"en","target_lang":"ja"}
```

ex) ja to en
```sh
$ curl -d '{"text": "管理コンソールから手動でデプロイする", "source_lang": "ja", "target_lang": "en" }' -L https://script.google.com/macros/s/XXXXXXXXXXXXXXXXXXXXXXXXXXX/exec
> {"status":"OK","translated":"Deploy manually from the admin console","source_text":"管理コンソールから手動でデプロイする","source_lang":"ja","target_lang":"en"}
```

## setup

### Enable Google Apps Script API
in [Google Apps Script > home > user settings](https://script.google.com/u/0/home/usersettings), apply enable API.  

### clasp
#### init

```sh
$ clasp login --no-localhost
$ clasp create
```

#### push src

```sh
$ clasp push
```

#### deploy

```sh
$ clasp open
```

**Deploy manually from the admin console**



