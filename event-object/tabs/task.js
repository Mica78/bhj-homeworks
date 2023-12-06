const tabs = document.querySelectorAll('.tab');
const tabsArray = Array.from(tabs);
const tab__content = document.querySelectorAll('.tab__content');
const tab__contentArray = Array.from(tab__content);

for (let index = 0; index < tabsArray.length; index++) {

    tabsArray[index].addEventListener('click', () => {
        tabsArray[index].classList.add('tab_active');
        tab__content[index].classList.add('tab__content_active');
        tabsArray.forEach(element => {
            if (tabsArray.indexOf(element) !== index) {
                element.classList.remove('tab_active');
            };
        });
        tab__contentArray.forEach(element => {
            if (tab__contentArray.indexOf(element) !== index) {
                element.classList.remove('tab__content_active');
            };
        });
    });
}
