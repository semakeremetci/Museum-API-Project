const favorites = document.getElementById("favorites");
const hearts = document.querySelectorAll(".heart");
const svg = document.querySelectorAll(".svg");
const svgData = localStorage.getItem("svgs");
let svgInfo = svgData ? svgData.split(",") : [];
const inputField = document.querySelector("input");
const frame = document.querySelector(".frame");
const modal = document.querySelector(".modal")
const imageIds = localStorage.getItem("imageIds")
const imageArr = imageIds ? imageIds.split(",") : []

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




inputField.addEventListener("keydown",function (e) {
    if(e.key === "Enter") {
        if (frame.lastElementChild.classList.contains("input_search")) {
            frame.removeChild(frame.lastChild)
        }
        frame.insertAdjacentHTML("beforeend", "<div class='input_search'></div>")

        const search = inputField.value;
        fetch("https://openaccess-api.clevelandart.org/api/artworks/?q="+search+ "&has_image=1",{method: "GET"}).then(
            response => response.json()
        ).then(
            (data) => {
                data.data.forEach(item => {
                    // console.log(item.creators[0].description)
                    const input_search = document.querySelector(".input_search");
                    const search_card = document.createElement("div"); search_card.classList.add("search_card"); input_search.appendChild(search_card);
                    const card_image = document.createElement("div"); card_image.classList.add("card_image"); search_card.appendChild(card_image);
                    search_card.insertAdjacentHTML("beforeend","<p class='card_name'>" + "<strong>" + item.title + "</strong></p>" + "<p class='card_description'>" + item.creators[0].description + "</p>")
                    search_card.insertAdjacentHTML("beforeend", '<svg class="heart svg 4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path></svg>')
                    search_card.querySelector("svg").addEventListener("click", function () {
                        if(search_card.querySelector("svg").classList.contains("heart")) {
                            search_card.querySelector("svg").classList.replace("heart","heart_filled")
                            imageArr.push(item.id)
                            localStorage.setItem("imageIds", imageArr)
                        } else {
                            search_card.querySelector("svg").classList.replace("heart_filled","heart")
                            const imageIndex = imagesId.indexOf(item.id)
                            imagesId.splice(imageIndex, 1)
                            console.log(imagesId)
                            localStorage.setItem("imageIds", imagesId)
                        }
                    })
                    card_image.style.backgroundImage = "url("+ item.images.web.url + ")"
                    card_image.addEventListener("click", function() {
                        modal.style.display = "flex";
                        document.querySelector(".modal-container--image").style.backgroundImage = "url(" + item.images.web.url + ")"
                    })

                })
            }
        ).catch(err => console.log(err));
            }
})

modal.lastElementChild.addEventListener("click", function() {
    modal.style.display = "none";
})
