
import movieList from "./movieList.js";

const moviescont = document.querySelector('#movies');

console.log(movieList().length)

const movieSections = movieList().map((movie, index) => {
    const n = index + 1;
    const movid = "movie"+n;

    const section = document.createElement("section");
    section.id = movid;
    section.classList.add('movie');

    const img = document.createElement('img');
    img.src = movie.img;
    img.alt = movie.name;

    const header = document.createElement('header');
    header.classList.add("movietitle");
    header.innerText = movie.name;

    const p = document.createElement('p');
    p.classList.add('movieabout');
    p.innerText = movie.description;

    const button = document.createElement('button');
    if(index != movieList().length -1){
        button.classList.add('next');
        button.innerText = "NEXT";
    }else{
        button.classList.add('about');
        button.innerText = "About"
    }

    section.append(img, header, p ,button);
    return section;
});
moviescont.append(...movieSections);


const scrollbtn = document.querySelector('.scrolldwn');

scrollbtn.addEventListener("click", () => {
    const firstmov = document.querySelector('#movie1');
    firstmov.scrollIntoView({behavior : "smooth"});
});

const nextbtns = document.querySelectorAll('.next');

nextbtns.forEach((nextbtn, index) => {
    nextbtn.addEventListener("click", () => {
        const nextmovie = document.querySelector(`#movie${index + 2}`);
        nextmovie.scrollIntoView({ behavior: "smooth" });
    });
});

const aboutbtn = document.querySelector('.about');

aboutbtn.addEventListener("click", () => {
    const aboutSection = document.querySelector('#about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});

const homebtn = document.querySelector('.home');

homebtn.addEventListener("click",()=>{
    const home = document.querySelector('#home');
    home.scrollIntoView({behavior : 'smooth'});
})


function isHomePageVisible() {
    const movie1 = document.querySelector('#movie1');
    const rect = movie1.getBoundingClientRect();
    return rect.top;
  }

window.addEventListener("scroll" ,()=>{

    if(isHomePageVisible() > 0 ){
        homebtn.style.display = "none";
    }else{
        homebtn.style.display = "block";
    }
})