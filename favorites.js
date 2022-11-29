const logo = document.getElementById("logo");
const svgBox = document.querySelectorAll(".svg");
const box = document.querySelectorAll(".box");
const svgs = localStorage.getItem("svgs");
const svgArr = svgs ? svgs.split(",") : [];
console.log(svgArr)


logo.addEventListener("click", function() {
    location.href = "index.html"
})

if (svgArr.length != []) {
    for(let i in svgArr){
        svgBox[svgArr[i]].classList.replace("heart", "heart_filled");
    }
}



// if(svgArr.length != [] ) {
//         const box = document.createElement("div");
//         box.classList.add("box");
//         painting.appendChild(box);
// }