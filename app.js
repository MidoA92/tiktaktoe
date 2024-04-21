const table= document.getElementById('#table');
const fields = document.getElementsByClassName('field');
const restartBtn = document.getElementById('restartBtn');
const players=['X, O'];
let currentPlayer= players[0];


const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

for (let i = 0; i < fields.length; i++) {
    fields[i].addEventListener('click', function() {
        if (!this.innerHTML) {
            this.innerHTML = currentPlayer;
            checkWinner(); 
            currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
        }
    });
}

function checkWinner() {
    for (let combination of winCombinations) {
        const [a, b, c] = combination;
        if (fields[a].innerHTML && fields[a].innerHTML === fields[b].innerHTML && fields[a].innerHTML === fields[c].innerHTML) {
            alert(`${fields[a].innerHTML} wins!`);
            resetGame();
            return;
        }
    }
};


function resetGame() {
    for (let i = 0; i < fields.length; i++) {
        fields[i].innerHTML = '';
    }
    currentPlayer = players[0]; 
}

restartBtn.addEventListener('click', resetGame);