const logo = document.getElementById("logo");
const favorites = document.getElementById("favorites");
const paintings = document.querySelectorAll(".painting");
const one = document.querySelector(".one");
const two = document.querySelector(".two");

favorites.addEventListener("click", function() {
    location.href = "favorites.html"
})

one.addEventListener("mouseover", function() {
    const wrapper = document.createElement("div");
    one.appendChild(wrapper);
})
