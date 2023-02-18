chrome.runtime.onInstalled.addListener(function() {
    console.log("I installed");
});

chrome.bookmarks.onCreated.addListener(() => {
    console.log("I bookmarked");
})