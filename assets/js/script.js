var experiences = [
    {
        company: 'Academia Desafío Latam',
        logo: 'https://i.vimeocdn.com/portrait/39547366_640x640',
        position: 'Instructor',
        start: 'Dic 2019',
        end: 'actualidad'
    }
];

var projects = [
    {
        name: 'Este portfolio!',
        desc: 'He creado este portfolio usando los componentes mas básicos de la web (HTML, CSS y JS), ademas de algunos otros elementos variados, échale un vistazo!',
        image: 'assets/images/portfolio.png',
        url: 'https://github.com/diegoski007/portfolio'
    }
];

var d = document;

var cardDeck = d.getElementById('card-deck');
var projectSection = d.getElementById('projects');
var experienceSection = d.getElementById('experiences');
var openMenu = d.getElementById('open');
var closeMenu = d.getElementById('close');
var sideMenu = d.getElementById('side-menu');

var groupExperiences = groupBy(experiences, 3)
var groupProjects = groupBy(projects, 3);

closeMenu.style.display = 'none';

groupExperiences.forEach(function(experiences){
    var article = d.createElement('article');
    article.className = 'experiences__caption'

    experiences.forEach(function(experience){
        var caption = createCaption(experience);
        article.appendChild(caption);
    });

    experienceSection.appendChild(article);
});

groupProjects.forEach(function(projects){
    var article = d.createElement('article');
    article.className = 'projects__card-deck'

    projects.forEach(function(project){
        var card = createCard(project);
        article.appendChild(card);
    })
    
    projectSection.appendChild(article);
});


function showMenu(){
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
    sideMenu.style.width = '50vw';
    d.body.style.overflow = 'hidden';
}

function hideMenu(){
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';
    sideMenu.style.width = '0';
    d.body.style.overflowY = 'scroll';
}

function groupBy(arr, n) {
    var group = [];
    for (var i = 0, end = arr.length / n; i < end; ++i)
    group.push(arr.slice(i * n, (i + 1) * n));
    return group;
};

function createCaption(data){
    var div = d.createElement('div');
    var figure = d.createElement('figure');
    var img = d.createElement('img');
    var h3 = d.createElement('h3');
    var h4 = d.createElement('h4');
    var p = d.createElement('p');

    var company = d.createTextNode(data.company);
    var position = d.createTextNode(data.position);
    var duration = d.createTextNode(`${data.start} - ${data.end}`);
    
    img.src = data.logo;
    p.style.fontWeight = '400';
    div.className = 'experiences__caption__info'
    figure.className = 'experiences__caption__info__image'
    h3.append(company);
    h4.append(position);
    p.append(duration);

    figure.appendChild(img);
    div.appendChild(figure);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(p);

    return div;
}


function createCard(data){

    var div = d.createElement('div');
    var figure = d.createElement('figure');
    var img = d.createElement('img');
    var h4 = d.createElement('h4');
    var p = d.createElement('p');
    var divButton = d.createElement('div');
    var button = d.createElement('button');
    
    var title = d.createTextNode(data.name);
    var desc = d.createTextNode(data.desc);
    var textButton = d.createTextNode('Ir a Github');
    
    img.src = data.image;
    div.className = 'projects__card-deck__card'
    figure.className = 'projects__card-deck__card__image'
    divButton.className = 'projects__card-deck__card__button'
    h4.append(title);
    p.append(desc);
    button.append(textButton);
    img.dataset.url = data.url;
    button.dataset.url = data.url;
    
    figure.appendChild(img);
    div.appendChild(figure);
    div.appendChild(h4);
    div.appendChild(p);
    divButton.appendChild(button)
    div.appendChild(divButton);
    
    return div;
}

function showPage(url){    
    var win = window.open(url, '_blank');
    if (win) {
        win.focus();
    } else {
        alert('Habilita los Pop-ups para ver el contenido! :D');
    }
}

function goToUrl(event){
    var url = event.target.dataset.url;
    
    if(url){
        showPage(url);
    }
}

// TypeForm
(function() { 
    var qs,js,q,s, 
    gi=d.getElementById, 
    ce=d.createElement, 
    gt=d.getElementsByTagName, 
    id="typef_orm", 
    b="https://embed.typeform.com/"; 
    
    if(!gi.call(d,id)) { 
        js=ce.call(d,"script"); 
        js.id=id; js.src=b+"embed.js"; 
        q=gt.call(d,"script")[0]; 
        q.parentNode.insertBefore(js,q) 
    } 
})();