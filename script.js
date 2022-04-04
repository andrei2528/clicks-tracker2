const screen = document.getElementById('button');
const container = document.getElementById('text');
let countClicks = 0;
screen.addEventListener('click', function() {
    countClicks = countClicks + 1;
    document.getElementById('text').innerHTML = ('You have pressed ' + countClicks);

    let specialMessage = Math.floor(Math.random() * 30);

    if (countClicks > 60) {
        if (specialMessage == 1) {
            document.getElementById('text').innerHTML = ('When are you going to stop?');
            document.getElementById('text').style.color = 'white';
        }
        if (specialMessage == 18) {
            document.getElementById('text').innerHTML = ('Enough for today');
            document.getElementById('text').style.color = 'white';
        }
        if (specialMessage == 5) {
            document.getElementById('text').innerHTML = ('I am starting to get bored');
            document.getElementById('text').style.color = 'white';
        }
        if (specialMessage == 2) {
            document.getElementById('text').innerHTML = ('STOP!!');
            document.getElementById('text').style.color = 'red';
            document.getElementById('text').style.fontSize = '3em';
            document.getElementById('text').style.animation = 'none';
        }

    } else if (countClicks == 50) {
        document.getElementById('text').innerHTML = ('When are you going to stop?');
    } else {
        document.getElementById('text').innerHTML = ('You have pressed ' + countClicks);
        document.getElementById('text').style.color = 'white';
    }

});