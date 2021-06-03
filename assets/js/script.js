$('#sideMenu').click(function(){

    toggleMenu($(this))

})

function toggleMenu(btn){
    btn.children().toggleClass('close-icon');
    
    if(!btn.data('show')){
        $('#sideNav').css('width', '250px');
    } else {
        $('#sideNav').css('width', '0');
    }
    
    var show = btn.data('show');
    btn.data('show', !show);

}
