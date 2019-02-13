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
var swiper = app.swiper.create('.swiper-container', {
    
})