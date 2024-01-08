const editor = document.getElementById('editor');
const card = document.querySelector('.card');
const myStorage = localStorage;
editor.value = myStorage.getItem('editor');

btn = document.createElement('button');
btn.textContent = 'Delete';
card.appendChild(btn);


editor.onkeyup = () => {
    myStorage.setItem('editor', editor.value);

};


btn.onclick = () => {
    myStorage.clear();
    editor.value = '';
};
