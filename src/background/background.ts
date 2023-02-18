
function OnInstalled() {
    chrome.runtime.onInstalled.addListener(function() {
    console.log("I installed");
    });
}

function BookMarkedOnCreated() {
    chrome.bookmarks.onCreated.addListener(() => {
        console.log("I bookmarked");
    });
}


export  {OnInstalled, BookMarkedOnCreated};