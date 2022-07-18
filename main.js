const menu = document.querySelector("#icon");
const navbar = document.querySelector("nav");
menu.addEventListener('click', () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("nav-toggle");
});

navbar.addEventListener('click', (event)=>{
  const {target} = event
  if(target.nodeName==='NAV' || target.nodeName==='UL')
  navbar.classList.remove('nav-toggle');
})
window.addEventListener("scroll" , () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("nav-toggle");
});