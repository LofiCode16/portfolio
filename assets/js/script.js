// window.setInterval(changeSlide, 5000);

// function changeSlide(){
//     var slide = document.getElementsByClassName('slide');
    
//     if(slide[0].style.display == 'none'){
//         fadeOut(slide[1]);
//         fadeIn(slide[0]);
//     } else {
//         fadeOut(slide[0]);
//         fadeIn(slide[1]);
//     }    
// }

// function fadeOut(element) {
//     var op = 1; 
//     var timer = setInterval(function () {
//         if (op <= 0.1){
//             clearInterval(timer);
//             element.style.display = 'none';
//         }
//         element.style.opacity = op;
//         element.style.filter = 'alpha(opacity=' + op * 100 + ")";
//         op -= op * 0.1;
//     }, 30);
// }

// function fadeIn(element) {
//     var op = 0.1;
//     var timer = setInterval(function () {
//         if (op >= 1){
//             clearInterval(timer);
//             element.style.display = 'flex';
//         }
//         element.style.opacity = op;
//         element.style.filter = 'alpha(opacity=' + op * 100 + ")";
//         op += op * 0.1;
//     }, 30);
// }
