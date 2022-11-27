// Grabbing elements needed for use
const dropdown_lists = document.querySelectorAll('#desktop-dropdown > li');

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