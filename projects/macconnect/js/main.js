let k = 1;
document.querySelector(".slide-" + k).style.display = "block"
changeCurrentIndicatorColor()

function nextSlide() {
    document.querySelector(".slide-" + k).style.display = "none"
    changeIndicatorColor()
    k++;

    if (k > 4) {
        k = 1;
    }

    changeCurrentIndicatorColor()
    document.querySelector(".slide-" + k).style.display = "block"
}

function previousSlide() {
    document.querySelector(".slide-" + k).style.display = "none"
    changeIndicatorColor()
    k--;

    if (k < 1) {
        k = 4;
    }
    changeCurrentIndicatorColor()
    document.querySelector(".slide-" + k).style.display = "block"
}

document.querySelector(".next").addEventListener("click", () => {
    nextSlide();
})

document.querySelector(".prev").addEventListener("click", () => {
    previousSlide()
})

// slider indicator
function changeToCurrentSlide() {

}

function changeIndicatorColor() {
    document.querySelector(`.slide-${k}-nav`).style.background = "grey";
}

function changeCurrentIndicatorColor() {
    document.querySelector(`.slide-${k}-nav`).style.background = "#ffffff";
}

for (let j=1; j<=4; j++) {
    document.querySelector(`.slide-${j}-nav`).addEventListener("click", () => {
        changeIndicatorColor()
        document.querySelector(".slide-" + k).style.display = "none"

        k = j
        document.querySelector(".slide-" + k).style.display = "block"
        changeCurrentIndicatorColor()
    })
}
