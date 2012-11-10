var brainRe = /brain/gi;

var foundBrains = document.body.innerHTML.match(brainRe);
var brainsCount = foundBrains ? foundBrains.length : 0;

chrome.extension.sendRequest({brainsCount : brainsCount});