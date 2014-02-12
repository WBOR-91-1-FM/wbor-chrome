chrome.extension.sendMessage({action: "get_status"}, function(response) {
  if(response.status) {
      $('#start').css('background-image', 'url(play2.png)');
      $('#stop').css('background-image', 'url(pause.png)');
      nowPlaying();
  }
  else {
      $('#stop').css('background-image', 'url(pause2.png)');
      $('#play').css('background-image', 'url(play.png)');
  }
});
$('#start').click(function(){
    chrome.extension.sendMessage({action: "play"});
    $('#start').css('background-image', 'url(play2.png)');
    $('#stop').css('background-image', 'url(pause.png)');
});
$('#stop').click(function(){
    chrome.extension.sendMessage({action: "stop"});
    $('#start').css('background-image', 'url(play.png)');
    $('#stop').css('background-image', 'url(pause2.png)');
});
function nowPlaying() {
    $('#info').html('<div class=spinner>B</div>');
    $.getJSON('http://www.wbor.org/updateinfo?ModPagespeed=noscript', function(data){
        $('#info').html('<p id=song></p><p id=artist></p>');
        $('#song').html(data.song_string);
        $('#artist').html(data.artist_string);
    });
    setTimeout(function(){nowPlaying()}, 60000);
}