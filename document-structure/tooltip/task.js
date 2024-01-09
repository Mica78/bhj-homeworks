const refs = document.getElementsByClassName('has-tooltip');
const refsArray = Array.from(refs);
const tooltipPosition = "right";


for (const el of refs) {
    el.addEventListener('click', () => {
        const tooltips = document.getElementsByClassName('tooltip');
        for (const tooltip of tooltips) {
            tooltip.remove();
        };
        el.href = "##";
        const tooltip = document.createElement('div');
        tooltip.textContent = el.title;
        tooltip.classList.add('tooltip');
        el.insertAdjacentElement("afterend", tooltip);
        tooltip.classList.add('tooltip_active');
        tooltip.dataset.position = tooltipPosition;
        tooltip.style.position = 'absolute';
        tooltip.style.left = el.offsetLeft + 'px';
        let elCoordinates = el.getBoundingClientRect();
        let childCoordinates = tooltip.getBoundingClientRect();
        if (tooltip.dataset.position === 'left') {
            tooltip.style.left = elCoordinates.x - childCoordinates.width + 'px';
            tooltip.style.top = window.scrollY + elCoordinates.y + 'px';
            console.log(elCoordinates, el.scrollTop, el.scrollHeight)
        } else if (tooltip.dataset.position === 'right') {
            tooltip.style.left =  elCoordinates.x + elCoordinates.width + 'px';
            tooltip.style.top = window.scrollY + elCoordinates.y + 'px';
        } else if (tooltip.dataset.position === 'top') {
            tooltip.style.top = window.scrollY + elCoordinates.y - childCoordinates.height + 'px';
        };
        tooltip.onclick = () => {
            tooltip.remove();
        };
    });

}
