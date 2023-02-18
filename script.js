const favorites = document.getElementById("favorites");
const hearts = document.querySelectorAll(".heart");
const svg = document.querySelectorAll(".svg");
const svgData = localStorage.getItem("svgs");
let svgInfo = svgData ? svgData.split(",") : [];
const inputField = document.querySelector("input");
const frame = document.querySelector(".frame");
const modal = document.querySelector(".modal")

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
            console.log("kaldırıldı")
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
