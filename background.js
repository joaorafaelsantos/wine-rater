const icons = {
  enabled: {
    16: "icons/icon16.png",
    48: "icons/icon48.png",
    128: "icons/icon128.png",
  },
  disabled: {
    16: "icons/icon16-disabled.png",
    48: "icons/icon48-disabled.png",
    128: "icons/icon128-disabled.png",
  },
};

async function fetchWine(name) {
  const response = await fetch(`https://www.vivino.com/search/wines?q=${name}`);
  const html = await response.text();
  return html;
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  chrome.action.setIcon({ path: icons.enabled });
  fetchWine(request.name).then(function (html) {
    sendResponse({ html: html });
  });

  return true;
});
