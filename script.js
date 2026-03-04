function toggleMenu(){
    const nav = document.getElementById("nav");
    nav.style.display = nav.style.display === "block" ? "none" : "block";
}

window.addEventListener("scroll",()=>{
    const header=document.getElementById("header");
    header.classList.toggle("scrolled",window.scrollY>50);
});