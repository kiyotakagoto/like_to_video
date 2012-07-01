// todo: create youtube player model object,
// and refactor event handlers
function poll_video_current_time ( event ) {
    if ( event === 1 ) {
        setInterval( function ( event ) {
            var player = document.getElementById('myytplayer');
            console.log( player.getCurrentTime() );
        }, 300);
    }
};

function onYouTubePlayerReady ( player_api_id ) {
    var player = document.getElementById('myytplayer');
    player.addEventListener('onStateChange', 'poll_video_current_time');
};
