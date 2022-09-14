"use strict";

this !== this.top && this.top.postMessage({
    type: "actionCallback",
    name: "onActionDisplayed",
    signature: "s"
}, "https://videos.redwood.com");

this.addEventListener("message", event => {
    if (event.origin !== "https://videos.redwood.com")
        return;

    console.log(event.data);
});
