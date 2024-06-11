let lightMode = false,
    toggleBar = document.querySelector(".toggle-bar"),
    body = document.querySelector("body"),
    icons = document.querySelector(".icon"),
    icons1 = document.querySelector(".icon1"),
    icons2 = document.querySelector(".icon2"),
    icons3 = document.querySelector(".icon3"),
    slide = document.querySelector(".slide"),
    slide1 = document.querySelector(".slide-sec");

document.querySelector(".theme-container").addEventListener("click", () => {
    moveIndicator()
})

function moveIndicator() {
    lightMode = !lightMode

    if (lightMode) {
        toggleBar.style.cssText = "background-color: #023eb4; justify-content: end;";
        body.style.cssText = "background-color: #ffffff; color: #000000"
        iconColor("#023eb4")
        buttonBackground("#ffffff")
        slide.style.backgroundColor = "#023eb4"
        slide1.style.backgroundColor = "#023eb4"

        changeBorderRadius(slide, "#023eb4;")
        changeBorderRadius(slide1, "#023eb4;")
    } else {
        toggleBar.style.cssText = "background-color: #ffffff; justify-content: start;";
        body.style.cssText = "background-color: #023eb4; color: #ffffff"
        iconColor("#ffffff")
        buttonBackground("#023eb4")
        slide.style.backgroundColor = "#ffffff"
        slide1.style.backgroundColor = "#ffffff"
    }
}

function iconColor(color) {
    icons.style.color = color
    icons1.style.color = color
    icons2.style.color = color
    icons3.style.color = color
}

function buttonBackground(color) {
    document.querySelector(".prev").style.backgroundColor = color;
    document.querySelector(".prev-1").style.backgroundColor = color;
    document.querySelector(".next").style.backgroundColor = color;
    document.querySelector(".next-1").style.backgroundColor = color;
}

function changeBorderRadius(slideNo, color) {
    slideNo.style.border = "1px solid " + color;
}