chrome.contextMenus.create({
    "id": "ShareX",
    "title": "Upload with ShareX",
    "contexts": ["image", "selection"]
});

chrome.contextMenus.onClicked.addListener(onClicked);

function onClicked(info, tab) {
    chrome.runtime.sendNativeMessage("com.getsharex.sharex", {
        URL: info.srcUrl,
        Text: info.selectionText
    });
}