var currentHost = window.location.host;
console.log(currentHost);

var activated = false;
var hardcoreMode = false;

var bannedUrls = 
    ["youtube.com",
    "www.youtube.com",
    "facebook.com",
    "www.facebook.com",
    "artstation.com",
    "www.artstation.com",
    "mycanal.fr","www.mycanal.fr",
    "canalplus.com","www.canalplus.com",
    "disneyplus.com","www.disneyplus.com",
    "netflix.com","www.netflix.com",
    "primevideo.com","www.primevideo.com",
    "reddit.com",
    "www.reddit.com",
    "4chan.org",
    "www.4chan.org",
    "instagram.com",
    "www.instagram.com",
    "tiktok.com",
    "www.tiktok.com",
    "dailymotion.com",
    "www.dailymotion.com",
    "rutub.ru",
    "www.rutub.ru","pornhub.com", "www.pornhub.com"]

chrome.storage.local.get(['activated','hardcoreMode'], function (result) {
    activated = result.activated;
    hardcoreMode = result.hardcoreMode;
    
    console.log(activated);
    console.log(hardcoreMode);
    //alert(result.activated);

    if(activated && hardcoreMode && bannedUrls.includes(currentHost))
    {
        document.querySelector("body").style.overflow = "hidden";
        document.querySelector("body").style.filter = "blur(20px)";
        setTimeout(() => {alert("you can't access this page, disable hardcoremode in AntiProcrastination popup");
        window.history.back();}, 1000);
        
    }
    else 
    if(activated && !hardcoreMode && bannedUrls.includes(currentHost))
    {
        document.querySelector("body").style.overflow = "hidden";
        document.querySelector("body").style.filter = "blur(20px)";
        setTimeout(() => {
            proceed = confirm("AntiProcrastinate mode is activated, are you sure you want to access this page?");
            if(!proceed){window.history.back();}
            else{
                document.querySelector("body").style.overflow = "auto";
                document.querySelector("body").style.filter = "";}
        }, 1000);
        
    }
});

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  