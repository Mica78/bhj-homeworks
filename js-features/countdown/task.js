const timer = document.getElementById("timer");
let timestamp = timer.textContent;

const interval = setInterval(() => {
    if (timestamp >= 0) {
        let hours = Math.floor(timestamp / 60 / 60)
        let minutes = Math.floor(timestamp / 60) - (hours * 60);
        let seconds = timestamp % 60;
        let formattedTimer = [
            hours.toString().padStart(2, '0'),
            minutes.toString().padStart(2, '0'),
            seconds.toString().padStart(2, '0')
          ].join(':');
        timestamp -= 10;
        timer.textContent = formattedTimer;
    } else {
        alert("Вы победили в конкурсе!");
        clearInterval(interval);
        a = document.createElement('a');
        a.href = 'demo.gif'; //здесь можно путь к файлу прописать
        a.click();
    }
}, 1000);
