function displayWeapon(weapon) {
    document.getElementById('displayedWeapon').innerHTML = weapon;
}

function setWeapon(weapon) {
    chrome.extension.sendRequest({setSelectedWeapon : weapon});
    displayWeapon(weapon);
}

function getWeapon() {
    chrome.extension.sendRequest({getSelectedWeapon : true}, function (response) {
        displayWeapon(response);
    });
}

var weaponsList = document.getElementById('weaponsList');
weaponsList.addEventListener('click', function () {
    setWeapon(weaponsList.options[weaponsList.selectedIndex].value);
});

getWeapon();
