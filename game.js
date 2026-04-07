let score = 0;
let pointsPerClick = 1;


function updateDisplay() {
    document.getElementById("score-display").textContent = 'Score: ' + score;
    document.getElementById("rate-display").textContent = 'Points Per Click: ' + pointsPerClick;
};

document.getElementById('click-btn').document.addEventListener("click", function() {
    score += pointsPerClick;
    updateDisplay();
});

