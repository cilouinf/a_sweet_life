let sliderImages = document.querySelectorAll('.slide'),
    bullets = document.querySelectorAll('.bullets'),
    sliderOpacity = 0.65,
    current = 0,
    timer = 7000,
    intervalTimer = setInterval(slideRight, timer);

// clear all images
function reset() {
    for(let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.opacity = 0;
        bullets[i].style.backgroundColor = 'transparent';
    }
    clearInterval(intervalTimer);
    intervalTimer = setInterval(slideRight, timer);
}

// Init Slider
function startSlide() {
    reset();
    sliderImages[0].style.opacity = sliderOpacity;
    bullets[0].style.backgroundColor = '#424242';
}

// Show next
function slideRight() {
    reset();
    if(current < sliderImages.length - 1) {
        sliderImages[current + 1].style.opacity = sliderOpacity;
        sliderImages[current + 1].style.animationName = 'sliderImgShow';
        sliderImages[current + 1].style.animationDuration = '1s';
        sliderImages[current].style.animationName = 'sliderImgHide';
        sliderImages[current].style.animationDuration = '1s';
        bullets[current+1].style.backgroundColor = '#424242';
        current++;
    }
    else {
        sliderImages[0].style.opacity = sliderOpacity;
        sliderImages[0].style.animationName = 'sliderImgShow';
        sliderImages[0].style.animationDuration = '1s';
        sliderImages[sliderImages.length - 1].style.animationName = 'sliderImgHide';
        sliderImages[sliderImages.length - 1].style.animationDuration = '1s';
        bullets[0].style.backgroundColor = '#424242';
        current = 0;
    }
}

// Show selected
function slideSelected() {
    reset();
    for(let i = 0; i < sliderImages.length; i++) {
        if(this === bullets[i]) {
            sliderImages[i].style.opacity = sliderOpacity;
            sliderImages[i].style.animationName = 'sliderImgShow';
            sliderImages[i].style.animationDuration = '1s';
            sliderImages[current].style.animationName = 'sliderImgHide';
            sliderImages[current].style.animationDuration = '1s';
            bullets[i].style.backgroundColor = '#424242';
            current = i;
        }
    }
}

// Event Listener
for(let i = 0; i < bullets.length; i++) {
    bullets[i].addEventListener('click', slideSelected);
}

startSlide();
