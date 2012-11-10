
var brainRe = /brain/gi;
var replacement = 'yum-yum-yum';

function eatBrains(rootElm) {
    
    var filter = function (node) {
        var match = node.textContent.match(brainRe);
        var result = (match) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        return result;
    }

    var walker = document.createTreeWalker(rootElm, NodeFilter.SHOW_TEXT, {acceptNode : filter}, false);

    while (walker.nextNode()) {
        walker.currentNode.nodeValue = walker.currentNode.nodeValue.replace(brainRe, replacement);
    }

}    

eatBrains(document.body);


// mutation observer

var observer = new WebKitMutationObserver(function (mutations) {
    for (i in mutations) {
        for (j = 0, l = mutations[i].addedNodes.length; j < l; j++) {
            eatBrains(mutations[i].addedNodes[j]);
        }
    }
});

observer.observe(document.body, {childList : true, subtree : true});