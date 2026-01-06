const rollButton = document.getElementById('rollButton');
const resetButton = document.getElementById('resetButton');
const dice1Img = document.getElementById('dice1');
const dice2Img = document.getElementById('dice2');
const result = document.getElementById('result');
const playersEl = document.getElementById('players');

const players = [
    { name: 'Player 1', score: 0, last: '—' },
    { name: 'Player 2', score: 0, last: '—' },
    { name: 'Player 3', score: 0, last: '—' },
    { name: 'Player 4', score: 0, last: '—' }
];
let currentPlayer = 0;

function updatePlayersUI() {
    const playerNodes = playersEl.querySelectorAll('.player');
    playerNodes.forEach((node, idx) => {
        node.classList.toggle('active', idx === currentPlayer);
        node.querySelector('.score').textContent = players[idx].score;
        node.querySelector('.last').textContent = players[idx].last;
    });
}

function randomFace() {
    return Math.floor(Math.random() * 6) + 1;
}

rollButton.addEventListener('click', () => {
    // guard: disable while rolling
    rollButton.disabled = true;
    rollButton.style.opacity = 0.9;

    // start animation
    dice1Img.classList.add('rolling');
    dice2Img.classList.add('rolling');
    result.textContent = 'Rolling...';

    // rapidly change faces while rolling
    const flicker = setInterval(() => {
        dice1Img.src = `dice${randomFace()}.svg`;
        dice2Img.src = `dice${randomFace()}.svg`;
    }, 70);

    // after animation, set final faces
    setTimeout(() => {
        clearInterval(flicker);
        const d1 = randomFace();
        const d2 = randomFace();
        dice1Img.src = `dice${d1}.svg`;
        dice2Img.src = `dice${d2}.svg`;
        dice1Img.classList.remove('rolling');
        dice2Img.classList.remove('rolling');
        const total = d1 + d2;
        // update current player's score and last roll
        players[currentPlayer].score += total;
        players[currentPlayer].last = total;
        result.textContent = `${players[currentPlayer].name} rolled ${d1} and ${d2} (total ${total})`;

        // advance turn
        currentPlayer = (currentPlayer + 1) % players.length;
        updatePlayersUI();

        rollButton.disabled = false;
    }, 900);
});

resetButton.addEventListener('click', () => {
    players.forEach(p => { p.score = 0; p.last = '—'; });
    currentPlayer = 0;
    updatePlayersUI();
    result.textContent = 'Reset. Click "Roll Dice" to play.';
    dice1Img.src = 'dice1.svg';
    dice2Img.src = 'dice2.svg';
});

// initialize
updatePlayersUI();
