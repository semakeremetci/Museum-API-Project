const logo = document.getElementById("logo");
const favorites = document.getElementById("favorites");
const paintings = document.querySelector(".painting");
const box = document.querySelectorAll(".box");

favorites.addEventListener("click", function() {
    location.href = "favorites.html"
})

// box.forEach((paint, index) => {
//     paint.addEventListener("mouseover", function() {
//         const wrapper = document.createElement("div");
//         wrapper.classList.add("wrapper");
//         const textArea = document.createElement("div");
//         textArea.classList.add("textarea");
//         textArea.innerText = "Birth of Venus"
//         paint.appendChild(textArea);
//         paint.appendChild(wrapper);
//         // console.log(paint)
//     })
//     paint.addEventListener("mouseout", function() {
//         const wrapper = document.querySelector(".wrapper");
//         const textArea = document.querySelector(".textarea");
//         wrapper.classList.remove("wrapper");
//         textArea.classList.remove("textarea");
//     })
// })