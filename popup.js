
var activated = false;
var hardcoreMode = false;

chrome.storage.local.get(['activated','hardcoreMode'], function (result) {
    activated = result.activated;
    hardcoreMode = result.hardcoreMode;
    UpdateSwitch();
    console.log(activated);
    console.log(hardcoreMode);
    //alert(result.activated);
});

function SetActivated(state)
{
    activated = state;

}

function UpdateSwitch()
{
    document.querySelector("#activeSwitch").className = "ActiveSwitch " + (activated?"ActiveSwitchEnabled":"ActiveSwitchDisabled");
    document.querySelector("#activeSwitch").innerHTML = (activated?"Enabled":"Disabled");
    
    document.querySelector("#HardCoreSwitch").checked  = hardcoreMode;
}

function ActivateSwitch() {
    activated = !activated;
    UpdateSwitch();
    chrome.storage.local.set({
        "activated":activated
    })
}
function ActivateHardcoreMode() {
    
    hardcoreMode = !hardcoreMode;
    UpdateSwitch();
    chrome.storage.local.set({
        "hardcoreMode":hardcoreMode
    })
}


document.querySelector("#activeSwitch").addEventListener("click", ActivateSwitch);
document.querySelector("#HardCoreSwitch").addEventListener("change", ActivateHardcoreMode);