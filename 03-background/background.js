if (!localStorage.getItem('isFirstRun')) {

    // first run only
    console.log('I am raising from my grave.');
    localStorage.setItem('isFirstRun', true);
    
} else {

    // not first run
    console.log('I live... again.');

}

// always
console.log('I am hungry for some brains.');