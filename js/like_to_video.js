var LikeToVideo = (function () {
    var LikeToVideoObject = {};
    LikeToVideoObject.constants = {
        STATE_NOT_STARTED : -1,
        STATE_END         : 0,
        STATE_PLAYING     : 1,
        STATE_PAUSING     : 2,
        STATE_BUFFERING   : 3,
        STATE_DONE_QUEING : 5
    },
    LikeToVideoObject.controller = {
        polling_manager : undefined,
        player : document.getElementById('myytplayer'),
        poll_video_current_time : function () {
            this.polling_manager = setInterval( function () {
                var current_time = this.player.getCurrentTime();
                console.log( current_time );

                var emotions = LikeToVideoObject.emotion_model.get_emotions_around( current_time );
                LikeToVideoObject.view.notice( emotions );
            }, 10);
        },
        pause_polling_video_current_time : function () {
            clearInterval( this.polling_manager );
        },
        prepare : function ( video_id ) {
            LikeToVideoObject.video_model.set_current_video( video_id );
            LikeToVideoObject.emotion_model.fetch_and_set_emotions_from_server( video_id );
            this.poll_video_current_time();
        },
    },
    LikeToVideoObject.view = {
        notice : function ( emotions ) {
        },
    },
    // emotion_model
    LikeToVideoObject.emotion_model = {
        // binary tree ? some data structure needed.
        emotions_of : {
        },
        get_emotions_around : function ( current_time ) {
        },
        get_emotions_of : function ( video_id ) {
            $.ajax( {
                type : 'GET',
                url : '',
                data : { video_id : video_id },
                success : function ( data ) {
                    LikeToVideoObject.emotion_model.set_emotion( data );
                },
                error : function ( xhr, type ) {
                    console.log('ajax error');
                },
            });
        },
        _get_emotions_from_server : function () {
        },
        set_emotion : function ( emotion_data ) {
            // set emotions_of by some data structure
        },
        fetch_and_set_emotions_from_server : function ( video_id ) {
            this.get_emotions_of( video_id );
        },
    },
    // video model
    LikeToVideoObject.video_model = {
        current_video : undefined,
        // property : video_id, value : video_data
        video_lists : {
        },
        set_current_video : function ( video_id ) {
            this.current_video = video_lists[ video_id ];
            return this.current_video;
        },
        get_current_video : function () {
            return this.current_video;
        },
        search_video : function ( search_keyword ) {
            // search youtube, etc
        },
        set_video_lists : function ( search_result ) {
            // set video_lists property
        },

    };
    return LikeToVideoObject;
})();
