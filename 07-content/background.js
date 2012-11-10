chrome.extension.onRequest.addListener(function(request, sender, callback) {

    // display brains count in badge
    if (request.brainsCount) {
        chrome.browserAction.setBadgeText({text : request.brainsCount.toString()});
    }
    
});