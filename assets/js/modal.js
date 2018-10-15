// Get the modal element
let modalBakery = document.querySelector('#modal-bakery'),
    btnOpenModalBakery = document.querySelector('#bakery-more-btn'),
    btnCloseModalBakery = document.querySelector('#close-bakery-btn'),
    modalPastry = document.querySelector('#modal-pastry'),
    btnOpenModalPastry = document.querySelector('#pastry-more-btn'),
    btnCloseModalPastry = document.querySelector('#close-pastry-btn'),
    modalSalon = document.querySelector('#modal-salon'),
    btnOpenModalSalon = document.querySelector('#salon-more-btn'),
    btnCloseModalSalon = document.querySelector('#close-salon-btn');

// Listen for (open) click on the modal button
btnOpenModalBakery.addEventListener('click', openModalBakery);
btnOpenModalPastry.addEventListener('click', openModalPastry);
btnOpenModalSalon.addEventListener('click', openModalSalon);
// Listen for (close) click on the modal X
btnCloseModalBakery.addEventListener('click', closeModalBakery);
btnCloseModalPastry.addEventListener('click', closeModalPastry);
btnCloseModalSalon.addEventListener('click', closeModalSalon);

// Function to open modal
function openModalBakery() {
    modalBakery.style.animationName = 'modalopen';
    modalBakery.style.animationDuration = '1s';
    modalBakery.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function openModalPastry() {
    modalPastry.style.animationName = 'modalopen';
    modalPastry.style.animationDuration = '1s';
    modalPastry.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function openModalSalon() {
    modalSalon.style.animationName = 'modalopen';
    modalSalon.style.animationDuration = '1s';
    modalSalon.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Function to close modal
function closeModalBakery() {
    modalBakery.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function closeModalPastry() {
    modalPastry.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function closeModalSalon() {
    modalSalon.style.display = 'none';
    document.body.style.overflow = 'auto';
}

let modalEvent1 = document.querySelector('#modal-event1'),
    btnOpenModalEvent1 = document.querySelector('#btn-event1'),
    btnCloseModalEvent1 = document.querySelector('#close-event1-btn'),
    modalEvent2 = document.querySelector('#modal-event2'),
    btnOpenModalEvent2 = document.querySelector('#btn-event2'),
    btnCloseModalEvent2 = document.querySelector('#close-event2-btn'),
    modalEvent3 = document.querySelector('#modal-event3'),
    btnOpenModalEvent3 = document.querySelector('#btn-event3'),
    btnCloseModalEvent3 = document.querySelector('#close-event3-btn');

btnOpenModalEvent1.addEventListener('click', openModalEvent1 );
btnCloseModalEvent1.addEventListener('click', closeModalEvent1 );
btnOpenModalEvent2.addEventListener('click', openModalEvent2 );
btnCloseModalEvent2.addEventListener('click', closeModalEvent2 );
btnOpenModalEvent3.addEventListener('click', openModalEvent3 );
btnCloseModalEvent3.addEventListener('click', closeModalEvent3 );

function openModalEvent1() {
    modalEvent1.style.animationName = 'modalopen';
    modalEvent1.style.animationDuration = '1s';
    modalEvent1.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function openModalEvent2() {
    modalEvent2.style.animationName = 'modalopen';
    modalEvent2.style.animationDuration = '1s';
    modalEvent2.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function openModalEvent3() {
    modalEvent3.style.animationName = 'modalopen';
    modalEvent3.style.animationDuration = '1s';
    modalEvent3.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModalEvent1() {
    modalEvent1.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function closeModalEvent2() {
    modalEvent2.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function closeModalEvent3() {
    modalEvent3.style.display = 'none';
    document.body.style.overflow = 'auto';
}

