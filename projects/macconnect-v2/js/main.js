let i = 1;
document.querySelector(".slide-" + i).style.display = "block"
changeCurrentIndicatorColor()

function nextSlide() {
    document.querySelector(".slide-" + i).style.display = "none"
    changeIndicatorColor()
    i++;

    if (i > 4) {
        i = 1;
    }

    changeCurrentIndicatorColor()
    document.querySelector(".slide-" + i).style.display = "block"
}

function previousSlide() {
    document.querySelector(".slide-" + i).style.display = "none"
    changeIndicatorColor()
    i--;

    if (i < 1) {
        i = 4;
    }
    changeCurrentIndicatorColor()
    document.querySelector(".slide-" + i).style.display = "block"
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
    document.querySelector(`.slide-${i}-nav`).style.background = "grey";
}

function changeCurrentIndicatorColor() {
    if (lightMode) {
        document.querySelector(`.slide-${i}-nav`).style.background = "#023eb4";
    } else {
        document.querySelector(`.slide-${i}-nav`).style.background = "#ffffff";
    }
}

for (let j=1; j<=4; j++) {
    document.querySelector(`.slide-${j}-nav`).addEventListener("click", () => {
        changeIndicatorColor()
        document.querySelector(".slide-" + i).style.display = "none"

        i = j
        document.querySelector(".slide-" + i).style.display = "block"
        changeCurrentIndicatorColor()
    })
}
