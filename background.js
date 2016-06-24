function addWordsRead(info,tab) {
  var selectionCount = info.selectionText.split(" ").length;
  getWordsRead(function(storedCount) {
    setWordsRead(selectionCount + storedCount);
  });
}

function updateExtensionTitle() {
  getWordsRead(function(storedCount) {
    if (isNaN(storedCount) || storedCount < 0) {
      setWordsRead(0);
    } else {
      setWordsRead(storedCount);
    }
  });
}

updateExtensionTitle();

chrome.contextMenus.create({
  title: chrome.i18n.getMessage('menuTitle'), 
  contexts:["selection"], 
  onclick: addWordsRead
});
