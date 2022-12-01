const logo = document.getElementById("logo");
const svgBox = document.querySelectorAll(".svg");
const box = document.querySelectorAll(".box");
const heart = document.querySelectorAll(".heart");
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

box.forEach((card, index) => {
    // console.log(String(index))
    if(svgArr.includes(String(index))) {
        card.style.display = "flex"
    } else {
        card.style.display = "none"
    }
})

heart.forEach((item, index) => {
    item.addEventListener("click", function() {
        if(item.classList.contains("heart_filled")) {
            item.classList.replace("heart_filled", "heart")
            let newIndx = svgArr.indexOf(index);
            // console.log(newIndx)
            let spliceSvg = svgArr.splice(newIndx, 1);
            localStorage.setItem("svgs", svgArr);
        }    
    })
})