// Grabbing elements needed for use
const dropdown_lists = document.querySelectorAll('#desktop-dropdown > li');
const menu_bar = document.querySelector('.menu-bar');
const dropdown_menu = document.querySelector('#dropdown-menu');
const burger_list = document.querySelectorAll('.burger-list');

// hiding and showing lists for desktop view
dropdown_lists.forEach(child => {
    // show
    child.addEventListener('mouseenter', () => {
        if (child.children[2].classList.contains('hide-list')) {
            child.children[2].classList.replace('hide-list', 'show-list');
            child.children[1].style.transform = 'rotateZ(-180deg)';
            child.children[1].style.transition = 'all .3s';
        }
    })
    // hide
    child.addEventListener('mouseleave', () => {
        if (child.children[2].classList.contains('show-list')) {
            child.children[2].classList.replace('show-list', 'hide-list');
            child.children[1].style.transform = 'rotateZ(0deg)';
            child.children[1].style.transition = 'all .3s';
        }
    })
});

// hiding and showing menu for mobile view... with toggle effects
menu_bar.addEventListener('click', () => {
    // toggle the menu bar on and off
    menu_bar.children[0].classList.toggle('top');
    menu_bar.children[1].classList.toggle('middle');
    menu_bar.children[2].classList.toggle('bottom');
    // on menu bar toggled on, menu dropdown
    if (dropdown_menu.classList.contains('hide-list')) {
        dropdown_menu.classList.replace('hide-list', 'show-list');
    } else {
        dropdown_menu.classList.replace('show-list', 'hide-list');
    }
});

// hiding and showing lists for mobile view
burger_list.forEach(child => {
    // show
    child.addEventListener('mouseenter', () => {
        if (child.classList.contains('h-[42px]')) {
            child.classList.replace('h-[42px]', 'nothing');
            child.children[0].style.transform = 'rotateZ(-180deg)';
            child.children[0].style.transition = 'all .3s';
        }
    })
    // hide
    child.addEventListener('mouseleave', () => {
        if (child.classList.contains('nothing')) {
            child.classList.replace('nothing', 'h-[42px]');
            child.children[0].style.transform = 'rotateZ(0deg)';
            child.children[0].style.transition = 'all .3s';
        }
    })
});