// https://developers.google.com/apps-script/guides/web#request_parameters
const doPost = (e: GoogleAppsScript.Events.DoPost) => {
  const contents = JSON.parse(e.postData.contents);
  const text = contents.text;
  const sourceLang = contents.source_lang ?? "en";
  const targetLang = contents.target_lang ?? "ja";
  const translated = LanguageApp.translate(text, sourceLang, targetLang);

  const res = ContentService.createTextOutput();
  res.setMimeType(ContentService.MimeType.JSON);
  res.setContent(
    JSON.stringify({
      status: "OK",
      translated: translated,
      source_text: text,
      source_lang: sourceLang,
      target_lang: targetLang,
    })
  );
  return res;
};
