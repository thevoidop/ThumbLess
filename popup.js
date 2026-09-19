const thumbsToggle = document.getElementById("hideThumbnails");
const shortsToggle = document.getElementById("hideShorts");

// Load stored values (default to true)
chrome.storage.sync.get({ hideThumbnails: true, hideShorts: true }, (items) => {
  thumbsToggle.checked = items.hideThumbnails;
  shortsToggle.checked = items.hideShorts;
});

// Save updates immediately when toggled
thumbsToggle.addEventListener("change", () => {
  chrome.storage.sync.set({ hideThumbnails: thumbsToggle.checked });
});

shortsToggle.addEventListener("change", () => {
  chrome.storage.sync.set({ hideShorts: shortsToggle.checked });
});
