const nav = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');
const links = nav.querySelectorAll('a');
const footerData = document.querySelector('.year')
const back = document.querySelector('.back')
const navscroll = document.querySelector('.main-head');


burger.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
  burger.classList.toggle('toggle');
})

links.forEach(link =>{
    link.addEventListener("click", () => {
           nav.classList.toggle('nav-open');
  burger.classList.toggle('toggle');
    })
})

let year = new Date()

 let getYear = year.getFullYear()
 
footerData.innerText = getYear


window.addEventListener("scroll", fixNav)


function fixNav() {
    if(window.scrollY > navscroll.offsetHeight + 150) {
        navscroll.classList.add('short');
    }
    else{
        navscroll.classList.remove('short')
    
}
console.log(window.scrollY)

}