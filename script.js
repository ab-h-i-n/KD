
import movieList from "./movieList.js";

const moviescont = document.querySelector('#movies');

console.log(movieList().length)

const movieSections = movieList().map((movie, index) => {
    const n = index + 1;
    const movid = "movie " + n;

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
        button.classList.add('home');
        button.innerText = "Home"
    }

    section.append(img, header, p ,button);
    return section;
});
moviescont.append(...movieSections);


const scrollbtn = document.querySelector('.scrolldwn');

scrollbtn.addEventListener("click", () => {
    window.scrollBy(0, window.innerHeight);
});

const nextbtns = document.querySelectorAll('.next');

nextbtns.forEach(nextbtn =>{
    nextbtn.addEventListener("click",()=>{
        window.scrollBy(0,window.innerHeight);
    })
})

const homebtn = document.querySelector('.home');

homebtn.addEventListener("click", () => {
    const homeSection = document.querySelector('#home');
    homeSection.scrollIntoView({ behavior: 'smooth' });
});