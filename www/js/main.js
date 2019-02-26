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
var img1 = 'img/IMG.main.1.covered.png';
var img2 = 'img/IMG.main.2.blank.png';
var img3 = 'img/IMG.main.3.blank.png';
var img4 = 'img/IMG.main.4.png';
var imgC = 'img/IMG.chest.closed.png';
var imgChc = 'img/IMG.couch.png';

$(document).on('click', function () {
    $('.img1').css('background-image', `url('${img1}')`);
    $('.img2').css('background-image', `url('${img2}')`);
    $('.img3').css('background-image', `url('${img3}')`);
    $('.img4').css('background-image', `url('${img4}')`);
    $('.imgChest').css('background-image', `url('${imgC}')`);
    $('.imgCouch').css('background-image', `url('${imgChc}')`);
    console.log(drUnlk);

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

//ON CLICK LISTENERS
$$(document).on('page:init', '.page[data-name="/main/"]', function (e) {
    //Main 1 (front door)
    $('.cover-coveralls').hide();
    $('.carpetZone').on('click', function () {
        if (drUnlk == false) {
            if (carpet == false && key == false) {
                carpet = true;
                img1 = 'img/IMG.main.1.uncovered.png';
                $('.img1').css('background-image', `url('${img1}')`);
            } else if (carpet == true && key == false) {
                key = true;
                img1 = 'img/IMG.main.1.uncovered.taken.png';
                $('.img1').css('background-image', `url('${img1}')`);
            } else if (carpet == true && key == true) {
                carpet = false;
                img1 = 'img/IMG.main.1.covered.taken.png';
                $('.img1').css('background-image', `url('${img1}')`);
            } else {
                carpet = true;
                img1 = 'img/IMG.main.1.uncovered.taken.png';
                $('.img1').css('background-image', `url('${img1}')`);
            }
        }

    });
    $('.doorZone').on('click', function () {
        if (drUnlk == true) {
            $('.cover-coveralls').fadeIn(1000, function () {
                window.alert("You escape the mysterious locked room! But...");
                $('.coveralls').css('background-image', "url('img/IMG.wot.png')");
                $('cover-coveralls').hide;
                window.setTimeout(function () {
                    window.alert("Where the heck is this...?");
                    window.setTimeout(function () {
                        $(".cover-coveralls").append('<div class="fab fab-extended fab-center-bottom"><a id="start" class="start--fab" href="javascript:history.go(0)"><div class="fab-text">Retry?</div></a></div>').hide().fadeIn(1000);
                    }, 3000)
                }, 2000)

            });
        };
    });

    //main 2 (weird box)
    $('.ccZone').on('click', function () {
        if (hands == true && handSet == false && timSet == false) {
            handSet = true;
            img2 = 'img/IMG.main.2.hands.png';
            $('.img2').css('background-image', `url('${img2}')`);
        } else if (hands == true && handSet == true && timSet == false && cubBlu == false) {
            timSet = true;
            img2 = 'img/IMG.main.2.hands.open.png';
            $('.img2').css('background-image', `url('${img2}')`);
        };
    });
    $('.drawerZone').on('click', function () {
        if (timSet == true) {
            cubBlu = true;
            img2 = 'img/IMG.main.2.hands.fix.png';
            $('.img2').css('background-image', `url('${img2}')`);
        }
    });
    //Main 3 (couch and toy)
    $('.blkZone').on('click', function () {
        if (cubBlu == true && cubRed == true && cubGrn == true) {
            drUnlk = true
            img3 = 'img/IMG.main.3.fill.png';
            img1 = 'img/IMG.main.1.open.png';
            $('.img2').css('background-image', `url('${img2}')`);
            $('.img1').css('background-image', `url('${img1}')`);
        }
    });

    //Main 4 (chest and clock)
    $('.tcZone').on('click', function () {
        if (hands == false) {
            hands = true;
            img4 = 'img/IMG.main.4.nohandsma.png';
            $('.img4').css('background-image', `url('${img4}')`);
        }
    });
});
$$(document).on('page:init', '.page[data-name="/chest/"]', function (e) {
    $('.imgChest').css('background-image', `url('${imgC}')`);
    $('.fChestZone').on('click', function () {
        if (chest == false && key == true) {
            chest = true;
            imgC = 'img/IMG.chest.open.png';
            $('.imgChest').css('background-image', `url('${imgC}')`);
        } else if (cubGrn == false && chest == true) {
            cubGrn = true;
            imgC = 'img/Img.chest.open.taken.png';
            $('.imgChest').css('background-image', `url('${imgC}')`);
        };
    });
});
$$(document).on('page:init', '.page[data-name="/couch/"]', function (e) {
    $('.imgCouch').css('background-image', `url('${imgChc}')`);
    $('.fCouchZone').on('click', function () {
        if (cubRed == false) {
            cubRed = true;
            imgChc = 'img/IMG.couch.taken.png';
            $('.imgCouch').css('background-image', `url('${imgChc}')`);
        }
    });
});
