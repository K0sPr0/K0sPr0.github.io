import INSTAGRAN_API_KEY from "./apikey.js";

var userFeed = new Instafeed({
    debug: true,
    limit: 3,
    template: '<div class="{{model.media_type}}"><a href="{{link}}" target="_blank"><img class="insta-img" title="{{caption}}" src="{{image}}" /></a></div>',
    target: "instafeed-container",
    accessToken: INSTAGRAN_API_KEY
});
userFeed.run();