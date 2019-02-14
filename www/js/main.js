var app = new Framework7({
    //    INITIALIZE APP
    root: '#app',

    routes: [
        {
            path: '/main/',
            url: 'pages/main.html'
        },
        {
            path: '/chest/',
            url: 'pages/chest.html'
        },
        {
            path: '/couch/',
            url: 'pages/couch.html'
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

//INITIALIZE GLOBAL IMAGE VARIABLES
var img1 = '../img/IMG.main.1.covered.png';
var img2 = '../img/IMG.main.2.blank.png';
var img3 = '../img/IMG.main.3.blank.png';
var img4 = '../img/IMG.main.4.png';

$(document).on('click', function () {
    $('.img1').css('background-image', `url("${img1}")`);
    $('.img2').css('background-image', `url("${img2}")`);
    $('.img3').css('background-image', `url("${img3}")`);
    $('.img4').css('background-image', `url("${img4}")`);
});

//INITIALIZE GAME VARIABLES
var drUnlk = false;
var cubGrn = false;
var cubRed = false;
var cubBlu = false;
var hands = false;
var key = false;
var carpet = false;
var chest = false;
var timSet = false;
var handSet = false;
