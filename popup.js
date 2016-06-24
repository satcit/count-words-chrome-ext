function setWordsReadLabel(count) {
  document.getElementById('wordsReadLabel').textContent = chrome.i18n.getMessage('wordsReadLabelText') + count;
}

function clearButtonClick() {
  setWordsRead(0);
  setWordsReadLabel(0);
}

document.addEventListener('DOMContentLoaded', function() {
  getWordsRead(setWordsReadLabel);
  document.getElementById('clearButton').onclick = clearButtonClick;
  document.getElementById('clearButton').value = chrome.i18n.getMessage('clearButtonText');
});
