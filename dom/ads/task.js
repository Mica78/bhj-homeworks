const object = Array.from(document.querySelector('.rotator').children);
const object1 = Array.from(document.querySelector('.rotator1').children);


function rotator(obj) {
    let i = -1;
    setTimeout(function funcDelay () {
        i ++;
        obj.forEach(element => {
            element.classList.remove('rotator__case_active')
        });
        obj[i].classList.add('rotator__case_active');
        delay = obj[i].dataset.speed;
        obj[i].style.color = obj[i].dataset.color;
        if (i >= object.length - 1) {
            i = -1;
        };
        setTimeout(funcDelay, delay);
    });
};


rotator(object)
rotator(object1)
