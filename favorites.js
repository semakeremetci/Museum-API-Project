const logo = document.getElementById("logo");
const svgBox = document.querySelectorAll(".svg");
const box = document.querySelectorAll(".box");
const heart = document.querySelectorAll(".heart");
const svgs = localStorage.getItem("svgs");
const svgArr = svgs ? svgs.split(",") : [];
const imageIds = localStorage.getItem("imageIds")
const imageArr = imageIds ? imageIds.split(",") : []
const painting = document.querySelector(".painting")
console.log(imageArr)

imageArr.forEach(el => {
    fetch("https://openaccess-api.clevelandart.org/api/artworks/?q=" + el + "&limit=1",{method: "GET"}).then(
        response => response.json()
    ).then(
        data => {
            data.data.forEach(item => {
                const createdBox = document.createElement("div");
                createdBox.classList.add("box");
                painting.appendChild(createdBox);
                createdBox.insertAdjacentHTML("beforeend", `<img src="${item.images.web.url}" width="100%">`)
                createdBox.insertAdjacentHTML("beforeend", `<svg class="heart_filled svg 6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path></svg>`)
                createdBox.insertAdjacentHTML("beforeend",'<div class="info"></div>')
                createdBox.querySelector(".info").insertAdjacentHTML("beforeend","<h3>" + item.title + "</h3>" + "<p>" + item.creators[0].description + "</p>")
            })
        }
    )
})

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

