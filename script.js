const logo = document.getElementById("logo");
const favorites = document.getElementById("favorites");
const paintings = document.querySelector(".painting");
const box = document.querySelectorAll(".box");

favorites.addEventListener("click", function() {
    location.href = "favorites.html"
})

box.forEach((paint, index) => {
    paint.addEventListener("mouseover", function() {
        const wrapper = document.createElement("div");
        paint.appendChild(wrapper);
        console.log(paint)
    })
})