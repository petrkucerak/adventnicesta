const sdk = require("microsoft-cognitiveservices-speech-sdk");
const fs = require("fs");

module.exports.text2speech = () => {
  console.log("~~~~~~~~ TEXT TO SPEECH ~~~~~~~~");
  // process variables
  const argv = process.argv;
  if (argv[1] === "" || argv[2] === "") {
    console.error("ERROR: Set up SPEECH_KEY and LOCATION_REGION!");
    return 1;
  }

  const dir = fs.readdirSync("_days/");
  dir.map((file) => {
    const content = fs.readFileSync(`_days/${file}`);
    const json = JSON.parse(content);
    const ssmlString = createSSML(json);
    console.log(ssmlString);
  });
};

function createSSML(content) {
  return `
<speak xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="http://www.w3.org/2001/mstts" xmlns:emo="http://www.w3.org/2009/10/emotionml" version="1.0" xml:lang="en-US">
  <mstts:backgroundaudio src="https://contoso.com/sample.wav" volume="0.7" fadein="3000" fadeout="4000" />
  <voice name="cs-CZ-AntoninNeural">
    <prosody rate="-15%" pitch="-5%">Vítej u dnešního zamyšlení na Tvé cestě Adventem!\nDnes je ${content.day} a autorem zamyšlení je ${content.author}.
      <break strength="medium" />
    </prosody>
  </voice>

  <audio src="https://github.com/petrkucerak/adventnicesta/blob/main/_audios/01_adventni_cesta-intro.mp3?raw=true" /></audio>

  <voice name="cs-CZ-VlastaNeural">
    <prosody rate="-5%" pitch="-5%">Úryvek z Bible\n
      <break strength="medium" />${content.quote}
    </prosody>
  </voice>

  <audio src="https://github.com/petrkucerak/adventnicesta/blob/main/_audios/02_adventni_cesta-break1.mp3?raw=true" /></audio>

  <voice name="cs-CZ-AntoninNeural">
    <prosody rate="-15%" pitch="-5%">Zamyšlení\n
      <break strength="medium" />${content.reflexion}
    </prosody>
  </voice>

  <audio src="https://github.com/petrkucerak/adventnicesta/blob/main/_audios/03_adventni_cesta-break2.mp3?raw=true" /></audio>

  <voice name="cs-CZ-AntoninNeural">
    <prosody rate="-15%" pitch="-5%">Závěrečná modlitba\n
      <break strength="medium" />${content.preayer}
    </prosody>
  </voice>
</speak>
    `;
}
