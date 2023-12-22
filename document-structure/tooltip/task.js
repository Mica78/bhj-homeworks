const refs = document.getElementsByClassName('has-tooltip')
const refsArray = Array.from(refs)
const tooltipPosition = "right"

for (const el of refs) {
    el.addEventListener('click', () => {
        for (const el of refs) {
            if (el.children[0]) {
                el.children[0].classList.remove('tooltip_active');
            }
        };
        el.href = "##";
        const child = document.createElement('span');
        child.textContent = el.title;
        child.classList.add('tooltip');
        el.appendChild(child);
        child.classList.add('tooltip_active');
        child.dataset.position = tooltipPosition;
        child.style.position = 'absolute';
        child.style.left = el.offsetLeft + 'px';
        let elCoordinates = el.getBoundingClientRect();
        let childCoordinates = child.getBoundingClientRect();
        if (child.dataset.position === 'left') {
            child.style.left = elCoordinates.x - childCoordinates.width + 'px';
            child.style.top = window.scrollY + elCoordinates.y + 'px';
            console.log(elCoordinates, el.scrollTop, el.scrollHeight)
        } else if (child.dataset.position === 'right') {
            child.style.left =  elCoordinates.x + elCoordinates.width + 'px';
            child.style.top = window.scrollY + elCoordinates.y + 'px';
        } else if (child.dataset.position === 'top') {
            child.style.top = window.scrollY + elCoordinates.y - childCoordinates.height + 'px';
        };
    });

}
