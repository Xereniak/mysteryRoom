var app = new Framework7({
    //    INITIALIZE APP
    root: '#app',

    routes: [
        {
            path: '/main/',
            url: 'pages/main.html'
        }
    ]
});

var mainView = app.views.create('.view-main');

$$ = Dom7;

$$(document).on('page:init', '.page[data-name="/main/"]', function (e) {
    var swiper = app.swiper.create('.swiper-container', {
        speed: 200,
        loop: true,
        effect: 'fade'
    });
    console.log("we tried");
});
