// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'window.getSelection().toString();'
  }, function(selection){
    console.log(selection[0])
    console.log(Object.getOwnPropertyNames(selection[0]));
    // selNode = selection.anchorNode();
    // console.log(selNode);
    chrome.tabs.create({
      url: "http://www.urbandictionary.com/define.php?term=".concat(selection[0])
    })
  });
  // No tabs or host permissions needed!
  // chrome.tabs.executeScript({
  //   code: 'document.body.style.backgroundColor="red"'
  // });
});
