
function changeSlide(){
    var slide = document.getElementsByClassName('slide');
    switchSlide(slide);
}

function switchSlide(slide){
    if(slide[0].style.display == 'none'){
        slide[0].style.display = 'inline';
        slide[1].style.display = 'none';
    } else {
        slide[0].style.display = 'none';
        slide[1].style.display = 'inline';
    }
}
