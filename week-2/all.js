const banner = document.querySelector(".banner h2");
const menuToggle = document.querySelector(".menuToggle");
const closeToggle =  document.querySelector(".closeToggle");
const headerActive = document.querySelector(".header-active");
const btn = document.querySelector(".btn");
const secondaryBoxes = document.querySelector(".secondary-boxes")

banner.addEventListener('click',(e)=>{
    banner.textContent = "Have a Good Time!"
})

menuToggle.addEventListener('click',(e)=>{
    headerActive.removeAttribute('style');
})
closeToggle.addEventListener('click',(e)=>{
    headerActive.style.display = "none";
})
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    secondaryBoxes.style.display=='none'? 
    secondaryBoxes.removeAttribute('style') : 
    secondaryBoxes.style.display='none';
})