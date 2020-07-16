var projects = [
    {
        name: 'Proyecto 1',
        desc: 'Este es el proyecto uno',
        image: 'assets/images/ex.jpg'
    },
    {
        name: 'Proyecto 2',
        desc: 'Este es el proyecto dos',
        image: 'assets/images/ex.jpg'
    },
    {
        name: 'Proyecto 3',
        desc: 'Este es el proyecto tres',
        image: 'assets/images/ex.jpg'
    },
    {
        name: 'Proyecto 4',
        desc: 'Este es el proyecto cuatro',
        image: 'assets/images/ex.jpg'
    },
    {
        name: 'Proyecto 5',
        desc: 'Este es el proyecto cinco',
        image: 'assets/images/ex.jpg'
    }
];

var cardDeck = document.getElementById('card-deck');
var projectSection = document.getElementById('projects');

var groupProjects = groupBy(projects, 3);

groupProjects.forEach(function(projects){
    var article = document.createElement('article');

    projects.forEach(function(project){
        var card = createCard(project);
        article.appendChild(card);
    })
    
    projectSection.appendChild(article);
});


function groupBy(arr, n) {
    var group = [];
    for (var i = 0, end = arr.length / n; i < end; ++i)
    group.push(arr.slice(i * n, (i + 1) * n));
    return group;
};


function createCard(project){
    
    var div = document.createElement('div');
    var figure = document.createElement('figure');
    var img = document.createElement('img');
    var h4 = document.createElement('h4');
    var p = document.createElement('p');
    var divButton = document.createElement('div');
    var button = document.createElement('button');
    
    var title = document.createTextNode(project.name);
    var desc = document.createTextNode(project.desc);
    var textButton = document.createTextNode('Ir a Github');
    
    img.src = project.image;
    h4.append(title);
    p.append(desc);
    button.append(textButton);
    
    figure.appendChild(img);
    div.appendChild(figure);
    div.appendChild(h4);
    div.appendChild(p);
    divButton.appendChild(button)
    div.appendChild(divButton);
    
    return div;
}

    


{/* <div>
    <figure>
    <img src="assets/images/ex.jpg" alt="" srcset="">
    </figure>
    <h4>titulo proyecto</h4>
    <p>descripcion del proyecto</p>
    <button>ir al repo</button>
</div> */}


// intervalo para el carousel
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
