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
  
};
