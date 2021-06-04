$(document).ready(function(){
    $('main .hero').fadeIn(500);
    $('main .container').fadeIn(1500);
    $('footer').fadeIn(1500);
})

$('#sideMenu').click(function(){
    toggleMenu($(this))
})

function toggleMenu(btn){
    btn.children().toggleClass('close-icon');
    
    if(!btn.data('show')){
        $('#sideNav').css('width', '200px');
    } else {
        $('#sideNav').css('width', '0');
    }

    $('main').toggleClass('fade-menu');
    $('footer').toggleClass('fade-menu');
    $('body').toggleClass('fade-body');
    
    var show = btn.data('show');
    btn.data('show', !show);
}
