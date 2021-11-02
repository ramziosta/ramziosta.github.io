const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    
    const visiblity = nav.getAttribute("nav-visible");
    if (visiblity === "false") {
        nav.setAttribute("nav-visible", true);
        navToggle.setAttribute("aria-expanded",true);
        
    } else {
        nav.setAttribute("nav-visible", false);
        navToggle.setAttribute("aria-expanded",false);
    }
})


