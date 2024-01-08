const closeBtn = document.querySelector('.modal__close');
const closedElement = document.querySelector('.modal');
const cookies = document.cookie.split(';');
const date = new Date(Date.now() + 10000)


if (!cookies.includes('closedElement=isClosed')){
    closedElement.classList.add('modal_active');
}

closeBtn.onclick = () => {
    closedElement.classList.remove('modal_active');
    document.cookie = `closedElement=isClosed; Expires=${date.toUTCString()}`;
};
