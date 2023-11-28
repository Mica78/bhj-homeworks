const clicker = document.getElementById("cookie")
const clickerCounter =  document.getElementById("clicker__counter");
const clickerAvgCounter = document.getElementById("clicker__average")
let clickCounter = parseInt(clickerCounter.textContent);
let isLittleImage = true;
let start =  Date.now()

clicker.onclick = () => {
    clickCounter += 1;
    clickerCounter.textContent = clickCounter;

    if (isLittleImage) {
        clicker.width =  clicker.width * 2;
        isLittleImage = false;
    } else {
        clicker.width = clicker.width / 2;
        isLittleImage = true;
    }

    let finish = Date.now();
    clickerAvgCounter.textContent = (1 / ((finish - start) / 1000)).toFixed(2);
    start = Date.now();
}
