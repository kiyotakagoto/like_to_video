// video model
var video_model = {
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

