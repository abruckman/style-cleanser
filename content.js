// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'window.getSelection().anchorNode.parentElement.stlye.cssText = "background-color: ";'
  })
  // No tabs or host permissions needed!
  // chrome.tabs.executeScript({
  //   code: 'document.body.style.backgroundColor="red"'
  // });
});
