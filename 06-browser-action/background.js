// browser action badge
chrome.browserAction.setBadgeText({text : 'test'});

var counter = 0;
setInterval(function () {
    chrome.browserAction.setBadgeText({text : (counter++).toString()});
}, 1000);

// message passing
chrome.extension.onRequest.addListener(function(request, sender, callback) {

    if (request.setSelectedWeapon) {
        localStorage.setItem('selectedWeapon', request.setSelectedWeapon);
    }
    
    if (request.getSelectedWeapon) {
        var selectedWeapon = localStorage.getItem('selectedWeapon') || 'Chainsaw';
        callback(selectedWeapon);
    }
    
});