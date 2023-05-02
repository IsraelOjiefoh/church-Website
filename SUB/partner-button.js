 
const Header = document.querySelector(".header");
window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
        Header.classList.add("hidden");
    }
    else {
        Header.classList.remove("hidden");
    }
});
