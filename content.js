// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    file: 'color-change.js',
  //   code: 'window.getSelection().anchorNode.parentElement.stlye.cssText = "background-color: white";'
   })
  console.log('waka flaka')
  // No tabs or host permissions needed!
  // chrome.tabs.executeScript({
  //   code: 'document.body.style.backgroundColor="red"'
  // });
});
