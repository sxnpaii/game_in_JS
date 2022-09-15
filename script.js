let blueCar = document.getElementById('bluecar')
let raceCar = document.getElementById('racecar')
let result = document.getElementById('result')
const score = document.getElementById('score')
var game = document.getElementById('game')

var counter = 0;
var jumpsound = document.getElementById('jumpsound');

blueCar.addEventListener('animationiteration', () => {
    var random = (Math.floor(Math.random() * 5) * 65)
    blueCar.style.left = random + 'px';
    counter++;
});



window.addEventListener("keydown", function (e) {
    if (e.keyCode == "39") {
        var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));

        if (raceCarLeft < 260) {
            raceCar.style.left = (raceCarLeft + 65) + 'px';

        }
        jumpsound.play();
    };

    if (e.keyCode == "37") {
        var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));
        if (raceCarLeft > 0) {
            raceCar.style.left = (raceCarLeft - 65) + 'px'
            jumpsound.play();
        }
    }
});





setInterval(function GameOver() {
    var blueCarTop = parseInt(window.getComputedStyle(blueCar).getPropertyValue('top'));
    var blueCarLeft = parseInt(window.getComputedStyle(blueCar).getPropertyValue('left'));
    var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue('left'));
    if (blueCarLeft === raceCarLeft && blueCarTop > 250 && blueCarTop > 270) {
        result.style.display = 'block';
        game.style.display = 'none';
        score.innerHTML = `score: ${counter}`;
        counter = 0;

        setTimeout(()=>{
            if (counter <= 5) {
                blueCar.style.animationDuration = '300';
            }

        },5000)
      
    }
});

window.addEventListener('onclick', function() {
    let body = document.querySelector('body');
    body.classList.toggle('night');
})



