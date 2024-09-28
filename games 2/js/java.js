const deck = document.getElementById('deck');
const modal = document.getElementById('modal');
const reset = document.querySelector('.reset-btn');
const playAgain = document.querySelector('.play-again-btn');
const timerDisplay = document.querySelector('.timer');
const movesCounterDisplay = document.querySelector('.moves-counter');
const starRatingDisplay = document.querySelectorAll('.star');

let opened = [];
let matched = [];
let moves = 0;
let timer;
let seconds = 0;

// Durasi timer (sekarang 70 detik)
let timeLeft = 70;
let timerInterval;

const images = [
    './img/bghatta.jpg',
    './img/bgkarno.jpg',
    './img/bgtomo.jpg',
    './img/bgpnc.jpg',
    './img/cutnyakdhien.jpg',
    './img/rakartini.jpg',
    './img/kihajar.jpg',
    './img/mohyamin.jpg'
];

const deckCards = [...images, ...images].sort(() => 0.5 - Math.random());

function startGame() {
    deck.innerHTML = '';
    opened = [];
    matched = [];
    moves = 0;
    seconds = 0;
    timeLeft = 70; // Reset timer ke 70 detik
    clearInterval(timerInterval); // Reset timer mundur
    movesCounterDisplay.textContent = moves;
    starRatingDisplay.forEach(star => star.style.visibility = 'visible');

    deckCards.forEach(src => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `<img src="${src}">`;
        deck.appendChild(card);
        card.addEventListener('click', cardClick);
    });

    startTimer(); // Mulai timer mundur
}

function cardClick() {
    if (opened.length === 2) return;
    this.classList.add('flip');
    opened.push(this);
    if (opened.length === 2) checkMatch();
}

function checkMatch() {
    if (opened[0].innerHTML === opened[1].innerHTML) {
        match();
    } else {
        setTimeout(() => {
            opened.forEach(card => card.classList.remove('flip'));
            opened = [];
        }, 1000);
    }
}

function match() {
    matched.push(opened[0], opened[1]);
    opened[0].classList.add('match');
    opened[1].classList.add('match');
    opened = [];
    moves++;
    movesCounterDisplay.textContent = moves;

    if (matched.length === deckCards.length) {
        clearInterval(timerInterval); // Hentikan timer ketika semua pasangan cocok
        setTimeout(() => {
            modal.style.display = 'block';
            showStars();
        }, 500);
    }
}

function showStars() {
    const stars = document.querySelectorAll('.star i');
    stars.forEach(star => {
        star.style.color = 'yellow'; // Bintang berubah warna menjadi kuning
    });
}

// Timer mundur untuk permainan
function startTimer() {
    timerInterval = setInterval(function () {
        timeLeft--;

        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        timerDisplay.innerHTML = `<i class="fa fa-hourglass-start"></i> Timer: ${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        // Jika waktu habis, hentikan permainan dan tampilkan pesan Game Over
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000); // Memperbarui setiap detik (1000 ms)
}

function gameOver() {
    alert('Game Over! Waktu habis.');
    window.location.href = '../menugame.html'; // Misalnya kembali ke menu game
}

// Reset permainan termasuk timer
function resetGame() {
    clearInterval(timerInterval);
    timeLeft = 70; // Atur ulang waktu menjadi 70 detik
    startGame(); // Mulai ulang permainan
}

// Event listener untuk tombol reset dan play again
reset.addEventListener('click', resetGame);
playAgain.addEventListener('click', resetGame);

// Mulai permainan saat halaman dimuat
window.onload = startGame;
