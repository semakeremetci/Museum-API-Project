const logo = document.getElementById("logo");
const favorites = document.getElementById("favorites");
const paintings = document.querySelector(".painting");
const box = document.querySelectorAll(".box");
const hearts = document.querySelectorAll(".heart");
const info = document.querySelectorAll("h3");
const svg = document.querySelectorAll(".svg");
const data = localStorage.getItem("painting");
const svgData = localStorage.getItem("svgs");
// console.log(data)
const paintingInfo = data ? data.split(",") : [];
const svgInfo = svgData ? svgData.split(",") : [];
console.log(svgInfo);


favorites.addEventListener("click", function() {
    location.href = "favorites.html"
})


hearts.forEach((item, index) => {
    item.addEventListener("click", function() {
        if(item.classList.contains("heart")) {
            item.classList.replace("heart", "heart_filled")
            // console.log(item.classList)
            paintingInfo.push(info[index].outerHTML);
            // console.log(paintingInfo);
            localStorage.setItem("painting", paintingInfo);
            svgInfo.push(index);
            // svgs.push(svg[index]);
            // console.log(svgs);
            localStorage.setItem("svgs", svgInfo);
        } else if(item.classList.contains("heart_filled")) {
            item.classList.replace("heart_filled", "heart")
            let spliced = paintingInfo.splice(index,1);
            let splicedSvg = svgInfo.splice(index,1);
            // console.log(spliced);
            localStorage.setItem("painting", paintingInfo);
            localStorage.setItem("svgs", svgInfo);
            // console.log(paintingInfo);
        }
    })
})



if (svgInfo) {
    // console.log(svg[svgInfo[3]])
    for(let i in svgInfo){
        svg[svgInfo[i]].classList.replace("heart", "heart_filled")
        console.log(svg[svgInfo[i]])
    }

}
