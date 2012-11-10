

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