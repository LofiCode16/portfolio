$(document).ready(function(){
    
    var frontProjects = [
        {
            name: 'El rincon de lo rico',
            desc: 'Una pequeña tienda creada con React16, la cual cuenta con las acciones básicas y datos extraídos de una BD creada con un servidor REST falso.',
            image: 'assets/images/ecommerce.JPG',
            url: 'https://trusting-easley-4571b0.netlify.app/'
        },
        {
            name: 'Movieflix',
            desc: 'Una galería con las mejores películas y estrenos del cine. La app está creada con React16 e incluye información sobre las películas y tráilers, las cuales son obtenidas desde la API de The MovieDb.',
            image: 'assets/images/movieflix.JPG',
            url: 'https://condescending-engelbart-ffeaea.netlify.app/'
        }
    ];

    var backProjects = [
        {
            name: 'Instafotos',
            desc: 'Red social inspirada en Instagram. Fue creada con el principal objetivo de nivelar a mis estudiantes (más detalles en GitHub). Está creada en Ruby on Rails y servida en Heroku.',
            image: 'assets/images/instafotos.JPG',
            url: 'https://instafotosapp.herokuapp.com/'
        },
        {
            name: 'Georails',
            desc: 'Implementación simple de un mapa dinámico multipunto usando Ruby on Rails, en el cual se pueden ver todas las direcciones a la vez, o alguna en particular.',
            image: 'assets/images/geo.JPG',
            url: 'https://georails.herokuapp.com/'
        },
        {
            name: 'Ecommerce Paypal',
            desc: 'Ecommerce básico desarrollado en Ruby on Rails, el cual permite la autenticación de usuarios para poder realizar las compras y realizar pagos a través de PayPal (en mantención), además de contar con gráficos con información sobre los productos.',
            image: 'assets/images/ecommerce_paypal.JPG',
            url: 'https://ecommerce-pp.herokuapp.com/'
        },
        {
            name: 'Photo Gallery (En desarrollo)',
            desc: 'Galería de fotos pensada para fotógrafos amateurs y personas que quieran promocionar lugares turísticos.',
            image: 'assets/images/back.jpg',
            url: 'https://github.com/diegoperez24/photo_gallery_app'
        }
    ];

    var location =  window.location.href
    var projectType = location.split('=')[1];

    frontProjects.forEach(function(p){
        $('.front-list').prepend(`<li><a href="${p.url}" target="_blank">${p.name}</a></li>`)
    });

    backProjects.forEach(function(p){
        $('.back-list').prepend(`<li><a href="${p.url}" target="_blank">${p.name}</a></li>`)
    });

    $('main .hero').fadeIn(500, function(){
        $('.title').fadeIn();
        $(this).css('display', 'flex');
        if($(this).width() > 779) {
            $('.hero div').fadeIn();
        }
    });
    $('main .container').fadeIn(1500);
    $('footer').fadeIn(1500);

    $(window).resize(function(){
        if($(this).width() > 779) {
            $('.hero div').fadeIn();
        } else {
            $('.hero div').fadeOut();
        }

    });

    $('.front').hover(function(){
        $('.hero').toggleClass('fade-background');
    })

    $('.back').hover(function(){
        $('.hero').toggleClass('fade-background');
    })

    switch(projectType){
        case 'front': 
            allProjects(frontProjects, 'FrontEnd');
            break;
        case 'back': 
            allProjects(backProjects, 'BackEnd');
            break;
        case undefined: 
            break; 
        default:
            break;
    }

})

$('#sideMenu').click(function(){
    toggleMenu($(this))
})

function toggleMenu(btn){
    var show = btn.data('show');
    btn.children().toggleClass('close-icon');
    
    if(!btn.data('show')){
        $('#sideNav').css('width', '200px');
    } else {
        $('#sideNav').css('width', '0');
    }

    $('main').toggleClass('fade-menu');
    $('footer').toggleClass('fade-menu');
    $('body').toggleClass('fade-body');
    
    btn.data('show', !show);
}

function allProjects(projects, title) {
    var cards = createCardGroup(projects);

    $('main').prepend(`
        <h2 class="text-center my-5 project-title">Proyectos orientados a ${title}</h2>
        <p class="text-center project-title">Estos proyectos están orientados principalmente a dar énfasis en tecnologías de ${title}</p>
        `);
    $('.projects').html(cards);
    $('.projects').fadeIn(1000);
}


function createCardGroup(dataArray){

    var groupData = groupBy(dataArray, 3);
    var groupCards = ''

    groupData.forEach(function(dataSlice){

        groupCards += '<div class="card-deck">'

        dataSlice.forEach(function(data){
            var card = createCard(data); 
            groupCards += card;
        });

        groupCards += '</div>'
    });

    return groupCards;
};

function createCard(data) {

    return `
    <div class="card my-5">
        <a href="${data.url}" target="_blank">
            <img src="${data.image}" class="card-img-top" height="200px">
            <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
                <p class="card-text">${data.desc}</p>
            </div>
        </a>
    </div>`
}

function groupBy(arr, n) {
    var group = [];
    
    for (var i = 0, end = arr.length / n; i < end; ++i){
        group.push(arr.slice(i * n, (i + 1) * n));
    }

    return group;
};