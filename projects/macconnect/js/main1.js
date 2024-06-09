let i = 1;
document.querySelector(".slide-sec-" + k).style.display = "block"
changeCurrentIndicatorColor1()

function nextSlide1() {
    document.querySelector(".slide-sec-" + k).style.display = "none"
    changeIndicatorColor1()
    k++;

    if (k > 3) {
        k = 1;
    }

    changeCurrentIndicatorColor1()
    document.querySelector(".slide-sec-" + k).style.display = "block"
}

function previousSlide1() {
    document.querySelector(".slide-sec-" + k).style.display = "none"
    changeIndicatorColor1()
    k--;

    if (k < 1) {
        k = 3;
    }
    changeCurrentIndicatorColor1()
    document.querySelector(".slide-sec-" + k).style.display = "block"
}

document.querySelector(".next-1").addEventListener("click", () => {
    nextSlide1();
})

document.querySelector(".prev-1").addEventListener("click", () => {
    previousSlide1()
})

// slider indicator
function changeToCurrentSlide1() {

}

function changeIndicatorColor1() {
    document.querySelector(`.slide-${k}-nav-1`).style.background = "grey";
}

function changeCurrentIndicatorColor1() {
    document.querySelector(`.slide-${k}-nav-1`).style.background = "#ffffff";
}

for (let j=1; j<=3; j++) {
    document.querySelector(`.slide-${j}-nav-1`).addEventListener("click", () => {
        changeIndicatorColor1()
        document.querySelector(".slide-sec-" + k).style.display = "none"

        k = j
        document.querySelector(".slide-sec-" + k).style.display = "block"
        changeCurrentIndicatorColor1()
    })
}
