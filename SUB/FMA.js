 
const Header = document.querySelector(".header");
window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
        Header.classList.add("hidden");
    }
    else {
        Header.classList.remove("hidden");
    }
});


window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var parallaxElement = document.querySelector(".parallax-container img");
  parallaxElement.style.backgroundPosition = "center " + scrollTop / 2 + "px";
});
