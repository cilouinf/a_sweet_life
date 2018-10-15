let burger = document.querySelector('.burger'),
    menu = document.querySelector('header nav ul'),
    isMenuOpen = false,
    header = document.querySelector('header'),
    menuItems = document.querySelectorAll('header nav ul li a');

// CSS tient compte de la taille de la scrollbar dans le min-width, JS ne tient pas
// compte de la scrollbar dans le clientWidth
function getScrollBarWidth() {
    let inner = document.createElement('p');
    inner.style.width = "100%";
    inner.style.height = "200px";

    let outer = document.createElement('div');
    outer.style.position = "absolute";
    outer.style.top = "0px";
    outer.style.left = "0px";
    outer.style.visibility = "hidden";
    outer.style.width = "200px";
    outer.style.height = "150px";
    outer.style.overflow = "hidden";
    outer.appendChild(inner);

    document.body.appendChild(outer);
    let w1 = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    let w2 = inner.offsetWidth;

    if (w1 === w2) {
        w2 = outer.clientWidth;
    }

    document.body.removeChild(outer);

    return (w1 - w2);
}

let scrollbarWidth = getScrollBarWidth();

function openAndCloseMenu() {
    //console.log('body width: ' + document.body.clientWidth);
    //console.log('Scrollbar width = ' + scrollbarWidth);
    if(document.body.clientWidth < (768 - scrollbarWidth)) {
        if(!isMenuOpen) {
            menu.style.display = 'block';
        }
        else {
            menu.style.display = 'none';
        }
        isMenuOpen = !isMenuOpen;
    }
}

function displayFlexMenu() {
    isMenuOpen = false;
    if(document.body.clientWidth < 768 - scrollbarWidth)
        menu.style.display = 'none';
    else
        menu.style.display = 'flex';
    console.log('body width: ' + document.body.clientWidth);
}

burger.addEventListener('click', openAndCloseMenu);
for(let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', openAndCloseMenu);
}

window.addEventListener('resize', displayFlexMenu);


