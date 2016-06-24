function setWordsRead(count) {
  chrome.storage.sync.set({'counted': count}, function() {
    // update extension button tooltip
    chrome.browserAction.setTitle({'title': count.toString()});
  });
}

function getWordsRead(callback) {
  chrome.storage.sync.get('counted', function(items) {
    callback(parseInt(items['counted']));
  });
}
