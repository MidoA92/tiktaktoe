const table = document.getElementById('table');
const fields = document.getElementsByClassName('field');
const restartBtn = document.getElementById('restartBtn');

const players = ['X', 'O'];
let currentPlayer = players[0];

let fieldsWithX = [];
let fieldsWithO = [];

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

function markField(fieldId) {
    let field = document.getElementById(fieldId);
    field.innerHTML = currentPlayer;
    if (currentPlayer === 'X') {
        fieldsWithX.push(fieldId);
    } else {
        fieldsWithO.push(fieldId);
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    checkGameStatus(); 
}

function resetGame() {
    for (let i = 0; i < fields.length; i++) {
        fields[i].innerHTML = '';
    }
    currentPlayer = players[0];
    fieldsWithX = [];
    fieldsWithO = [];
}

restartBtn.addEventListener('click', resetGame);

function checkGameStatus() {
    for (let i = 0; i < winCombinations.length; i++) {
        let combo = winCombinations[i];
        let hasX = combo.every((index) => fieldsWithX.includes('field' + (index + 1)));
        let hasO = combo.every((index) => fieldsWithO.includes('field' + (index + 1)));
        if (hasX) {
            alert("X wins!");
            resetGame(); 
            return;
        } else if (hasO) {
            alert("O wins!");
            resetGame();
            return;
        }
    }
}
