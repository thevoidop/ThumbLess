function applySettings(settings) {
  document.documentElement.classList.toggle(
    "thumbless-show-thumbs",
    settings.hideThumbnails === false,
  );
  document.documentElement.classList.toggle(
    "thumbless-show-shorts",
    settings.hideShorts === false,
  );
}

// Read settings on load (defaults to true)
chrome.storage.sync.get(
  { hideThumbnails: true, hideShorts: true },
  applySettings,
);

// Listen for instant updates from the popup
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "sync") {
    chrome.storage.sync.get(
      { hideThumbnails: true, hideShorts: true },
      applySettings,
    );
  }
});
