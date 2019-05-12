

/*
 * animation widget from here: https://github.com/silexlabs/Silex/issues/443
 */
$(function() {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if(!isMobile) {
        window.sr = ScrollReveal({
            distance: '100px'
        });
        sr.reveal('.from-left', { origin:  'left'});
        sr.reveal('.from-right', { origin:  'right'});
        sr.reveal('.from-top', { origin:  'top'});
        sr.reveal('.from-bottom', { origin:  'bottom'});
    }
    $('.scroll-down').click(function(event) {
        // Preventing default action of the event
        event.preventDefault();
        // Getting the height of the document
        var n = $(window).height();
        $('html, body').animate({ scrollTop: n }, 500);
    });
});
$(function() {
    $('.twitchbutton1').click(function(event) {
        event.preventDefault();
        ('.twitchplayer').player.setChannel("archersquad");
    });
});
$(function() {
    $('.twitchbutton2').click(function(event) {
        event.preventDefault();
        ('.twitchplayer').player.setChannel("warnecromancer");
    });
});
$(function() {
    $('.twitchbutton3').click(function(event) {
        event.preventDefault();
        ('.twitchplayer').player.setChannel("shin_no_ken");
    });
});
$(function() {
    $('.twitchbutton4').click(function(event) {
        event.preventDefault();
        ('.twitchplayer').player.setChannel("naveronasis");
    });
});