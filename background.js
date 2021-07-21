chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({
        "activated":false,
        "hardcoreMode":false
    })

})
