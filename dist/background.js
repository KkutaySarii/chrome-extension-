/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/
chrome.runtime.onInstalled.addListener(function () {
    console.log("I installed");
});
chrome.bookmarks.onCreated.addListener(() => {
    console.log("I bookmarked");
});

/******/ })()
;
//# sourceMappingURL=background.js.map