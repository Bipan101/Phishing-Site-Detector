function isPhishingURL(url) {
  const phishingSites = ["phishingsite.com", "badwebsite.net", "PiloSaleLtd.com", "TiffanyCoShop.com", "Sheingivesback.com", "Luvasti.com", "BedBathClose.com", "BrookShoeOutlet.com",
  "SueWhitehurst.shop", "WilkoClosing.com", "Zamzbuy.com", "BHSpcial.com"];
  let hostname = new URL(url).hostname;
  return phishingSites.includes(hostname);
}

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    let url = details.url;
    if (isPhishingURL(url)) {
      return { cancel: true };
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);
