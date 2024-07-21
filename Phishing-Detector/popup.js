// popup.js
document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      let url = tabs[0].url;
      if (isPhishingURL(url)) {
        document.getElementById('message').innerHTML = '<div class="warning">Warning: This site might be a phishing attempt!</div>';
      } else {
        document.getElementById('message').innerText = 'This site seems safe.';
      }
    });
  });