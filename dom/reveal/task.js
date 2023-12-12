const div = document.querySelectorAll('.reveal');

function setRevealActive(innerHeight, elementArray) {
    elementArray.forEach(element => {
        if(element.getBoundingClientRect().top <= innerHeight &&
            element.getBoundingClientRect().bottom >= 0) {
                element.classList.add('reveal_active');
        } else {
            element.classList.remove('reveal_active');
        };
    });
};

document.addEventListener('scroll', () => {
    setRevealActive(window.innerHeight, div);
})
