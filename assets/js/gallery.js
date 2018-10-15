let bakeryImages = document.querySelectorAll('#gallery .bakery'),
    btnShowBakeryImages = document.querySelector('#gallery-show-bakery'),
    pastryImages = document.querySelectorAll('#gallery .pastry'),
    btnShowPastryImages = document.querySelector('#gallery-show-pastry'),
    salonImages = document.querySelectorAll('#gallery .salon'),
    btnShowSalonImages = document.querySelector('#gallery-show-salon'),
    diversImages = document.querySelectorAll('#gallery .divers'),
    btnShowDiversImages = document.querySelector('#gallery-show-divers'),
    allImages = document.querySelectorAll('#gallery .all'),
    btnShowAllImages = document.querySelector('#gallery-show-all'),
    modalGallery = document.querySelector('#modal-gallery');

// clear all images
function resetGallery() {
    for(let i = 0; i < allImages.length; i++) {
        allImages[i].style.display = 'none';
    }
    resetButtons();
}

function resetButtons() {
    btnShowAllImages.style.backgroundColor = '#f4f4f4';
    btnShowAllImages.style.color ="#000000";
    btnShowBakeryImages.style.backgroundColor = '#f4f4f4';
    btnShowBakeryImages.style.color ="#000000";
    btnShowPastryImages.style.backgroundColor = '#f4f4f4';
    btnShowPastryImages.style.color ="#000000";
    btnShowSalonImages.style.backgroundColor = '#f4f4f4';
    btnShowSalonImages.style.color ="#000000";
    btnShowDiversImages.style.backgroundColor = '#f4f4f4';
    btnShowDiversImages.style.color ="#000000";
}

function showBakeryImages() {
    resetGallery();
    for(let i = 0; i < bakeryImages.length; i++) {
        bakeryImages[i].style.display = 'block';
    }
    btnShowBakeryImages.style.backgroundColor = '#424242';
    btnShowBakeryImages.style.color ="#f4f4f4";
}

function showPastryImages() {
    resetGallery();
    for(let i = 0; i < pastryImages.length; i++) {
        pastryImages[i].style.display = 'block';
    }
    btnShowPastryImages.style.backgroundColor = '#424242';
    btnShowPastryImages.style.color ="#f4f4f4";
}

function showSalonImages() {
    resetGallery();
    for(let i = 0; i < salonImages.length; i++) {
        salonImages[i].style.display = 'block';
    }
    btnShowSalonImages.style.backgroundColor = '#424242';
    btnShowSalonImages.style.color ="#f4f4f4";
}

function showDiversImages() {
    resetGallery();
    for(let i = 0; i < diversImages.length; i++) {
        diversImages[i].style.display = 'block';
    }
    btnShowDiversImages.style.backgroundColor = '#424242';
    btnShowDiversImages.style.color ="#f4f4f4";
}

function showAllImages() {
    for(let i = 0; i < allImages.length; i++) {
        allImages[i].style.display = 'block';
    }
    resetButtons();
    btnShowAllImages.style.backgroundColor = '#424242';
    btnShowAllImages.style.color ="#f4f4f4";
}

// Event Listeners
btnShowAllImages.addEventListener('click', showAllImages);
btnShowBakeryImages.addEventListener('click', showBakeryImages);
btnShowPastryImages.addEventListener('click', showPastryImages);
btnShowSalonImages.addEventListener('click', showSalonImages);
btnShowDiversImages.addEventListener('click', showDiversImages);

// Init Gallery
showBakeryImages();

// For displaying big image
const currentImg = document.querySelector('#current');
const imgs = document.querySelectorAll('.images-container .all');
const opacity = 0.4;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
    imgs.forEach(img => (img.style.opacity = 1));
    currentImg.src = e.target.getAttribute('src');
    e.target.style.opacity = opacity;
    modalGallery.style.display = 'inline-block';
    document.body.style.overflow = 'hidden';
}

modalGallery.addEventListener('click', closeModal);

function closeModal() {
    modalGallery.style.display = 'none';
    document.body.style.overflow = 'auto';
}
