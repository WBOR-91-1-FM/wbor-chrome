var NP = false;
chrome.extension.sendMessage({action: "get_status"}, function(response) {
		if(response.status) {
				$('#start').addClass('active');
				$('#stop').removeClass('active');
				$('#record').addClass('play');
				NP = true;
				nowPlaying();
		}
		else {
				$('#start').removeClass('active');
				$('#stop').addClass('active');
				$('#record').removeClass('play');
				$('#info').html('');
				NP = false;
		}
});
$('#start').click(function(){
		if(!NP) {
				chrome.extension.sendMessage({action: "play"});
				$('#start').addClass('active');
				$('#stop').removeClass('active');
				$('#record').addClass('play');
				NP = true;
				nowPlaying();
		}
});
$('#stop').click(function(){
    if(NP) {
				chrome.extension.sendMessage({action: "stop"});
				$('#start').removeClass('active');
				$('#stop').addClass('active');
				$('#record').removeClass('play');
				$('#info').html('');
				NP = false;
		}
});
function nowPlaying() {
    $('#info').html('<div class=spinner>B</div>');
    $.getJSON('http://www.wbor.org/updateinfo?ModPagespeed=noscript', function(data){
        $('#info').html('<p id=song></p><p id=artist></p>');
        $('#song').html(data.song_string);
        $('#artist').html(data.artist_string);
    });
    if(NP) setTimeout(function(){nowPlaying()}, 60000);
}