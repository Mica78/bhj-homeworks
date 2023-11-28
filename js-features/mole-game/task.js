const deadMoles = document.getElementById('dead');
const lost = document.getElementById("lost");

const getHole = index => document.getElementById(`hole${index}`);

const counter = (hole) => {
    if (hole.classList.contains( 'hole_has-mole' )) {
        deadMoles.textContent = parseInt(deadMoles.textContent) + 1;
    } else {
        lost.textContent = parseInt(lost.textContent) + 1;
    }
};

const onStopGame = (con) => {
    if (con) {
        deadMoles.textContent, lost.textContent = [0, 0];
    } else {
        window.close();
    }
};

const gameResult = () => {
    if (
        parseInt(deadMoles.textContent) >= 10 &&
        parseInt(lost.textContent) < 5 &&
        parseInt(lost.textContent) >= 0
        ) {
            let con = confirm("You win");
            onStopGame(con);
        } else if (
            parseInt(deadMoles.textContent) < 10 &&
            parseInt(lost.textContent) >=5
            ) {
                let con = confirm("You lose");
                onStopGame(con);
            }
};

for (let index = 1; index < 10; index++) {
    const hole = getHole(index);
    hole.onclick = () => {
        counter(hole);
        setTimeout(() => {gameResult()}, 1);
    };
};
