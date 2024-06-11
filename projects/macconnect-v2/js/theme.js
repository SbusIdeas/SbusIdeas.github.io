let lightMode = false,
    toggleBar = document.querySelector(".toggle-bar"),
    body = document.querySelector("body"),
    icons = document.querySelector(".icon"),
    icons1 = document.querySelector(".icon1"),
    icons2 = document.querySelector(".icon2"),
    icons3 = document.querySelector(".icon3"),
    slide = document.querySelector(".slide"),
    slides = document.querySelectorAll(".slide"),
    slide1 = document.querySelector(".slide-sec"),
    slides1 = document.querySelectorAll(".slide-sec"),
    h3Headers = document.querySelectorAll(".slide h3, .slide-sec h3"),
    months = document.querySelectorAll(".container h3");

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
        changeSlideBackground("#023eb4")
        h3TextColor("#ffffff")
        changeCurrentIndicatorColor1()
        changeCurrentIndicatorColor()

        for (let a=0; a<months.length; a++) {
            months[a].style.color = "#000000"
        }
    } else {
        toggleBar.style.cssText = "background-color: #ffffff; justify-content: start;";
        body.style.cssText = "background-color: #023eb4; color: #ffffff"
        iconColor("#ffffff")
        buttonBackground("#023eb4")
        changeSlideBackground("#ffffff")
        h3TextColor("#000000")
        changeCurrentIndicatorColor1()
        changeCurrentIndicatorColor()

        for (let a=0; a<months.length; a++) {
            months[a].style.color = "#ffffff"
        }
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


function changeSlideBackground(color) {
    for (let a=0; a<slides.length; a++) {
        slides[a].style.backgroundColor = color
    }

    for (let a=0; a<slides1.length; a++) {
        slides1[a].style.backgroundColor = color
    }
}

function h3TextColor(color) {
    for (let a=0; a<h3Headers.length; a++) {
        h3Headers[a].style.color = color
    }
}