const favorites = document.getElementById("favorites");
const hearts = document.querySelectorAll(".heart");
const svg = document.querySelectorAll(".svg");
const svgData = localStorage.getItem("svgs");
let svgInfo = svgData ? svgData.split(",") : [];
// console.log(svgInfo);


favorites.addEventListener("click", function() {
    location.href = "favorites.html"
})


hearts.forEach((item, index) => {
    item.addEventListener("click", function() {
        if(item.classList.contains("heart")) {
            item.classList.replace("heart", "heart_filled")
            // console.log(item.classList)
            svgInfo.push(index.toString());
            localStorage.setItem("svgs", svgInfo);
        } else if(item.classList.contains("heart_filled")) {
            item.classList.replace("heart_filled", "heart")
            let newIndex = svgInfo.indexOf(index.toString());
            console.log(newIndex)
            let splicedSvg = svgInfo.splice(newIndex, 1);
            localStorage.setItem("svgs", svgInfo);
        }
    })
})



if (svgInfo) {
    // console.log(svg[svgInfo[3]])
    for(let i in svgInfo){
        svg[svgInfo[i]].classList.replace("heart", "heart_filled")
        // console.log(svg[svgInfo[i]])
    }

}
