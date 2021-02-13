let Player = document.getElementById('player');
let Score = document.getElementById('score');
let Timer = document.getElementById('timer');

let RealTimer = 20;
let RealScore = 0;
let IntervalCount = 800;

let timeLineSound = new Audio();
timeLineSound.src = '../sounds/CJ - WHOOPTY (Official Instrumental) [Prod. Pxcoyo].mp3';

document.body.addEventListener('click', () => {
    timeLineSound.play();
});

let intervalId = setInterval(startTimer, IntervalCount);

Player.addEventListener('click', () => {
    RealScore++;
    Score.textContent = 'Score' + ' ' + RealScore;
    RealTimer += 5;
    Timer.textContent = 'Timer' + ' ' + RealTimer;

    let RandomPosX = Math.floor(Math.random() * 500);
    let RandomPosY = Math.floor(Math.random() * 550);

    let RandomScale = Math.floor(Math.random() * 100);

    if(RandomScale < 10) {
        RandomScale = 20;
        Player.style.width = RandomScale + 'px';
        Player.style.height = RandomScale + 'px';
    }

    Player.style.marginLeft = RandomPosX + 'px';
    Player.style.marginTop = RandomPosY + 'px';
    Player.style.width = RandomScale + 'px';
    Player.style.height = RandomScale + 'px';
});

function startTimer() {
    RealTimer--;
    Timer.textContent = 'Timer' + ' ' + RealTimer;

    if(RealTimer < 1) {
        endGame();
        stopTimer();
    }
}

function stopTimer() {
    clearInterval(intervalId);
}

function endGame() {
    Swal.fire('Opps time out you lose' + ' ' + 'Your score is ' + ' ' + RealScore);
}