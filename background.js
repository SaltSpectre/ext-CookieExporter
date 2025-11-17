// Background service worker for the Cookie Exporter extension
// This runs in the background and can handle extension lifecycle events

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('Cookie Exporter extension installed');
  } else if (details.reason === 'update') {
    console.log('Cookie Exporter extension updated');
  }
});

// Handle messages from popup or content scripts if needed
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Can be used for future functionality
  console.log('Message received:', request);
  sendResponse({ status: 'ok' });
  return true;
});
