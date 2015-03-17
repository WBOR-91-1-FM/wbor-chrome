/**
 * Created by Ruben on 1/24/14.
 */
var playing = false;
var audio = document.createElement('audio');
audio.setAttribute("preload", "auto");
audio.autobuffer = true;

var source = document.createElement('source');
source.type = "audio/mpeg";
source.src = "http://139.140.232.18:8000/WBOR";
audio.appendChild(source);
chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.action == "play") {
            audio.load();
            audio.play();
            playing = true;
        }
        else if(request.action == "stop") {
            audio.pause();
            playing = false;
        }
        else if(request.action == "get_status") {
            sendResponse({status: playing});
        }
    }
);