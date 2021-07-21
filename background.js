chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({
        "activated":true,
        "hardcoreMode":true
    })

})
