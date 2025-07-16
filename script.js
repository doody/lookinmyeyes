const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');

const audio1 = new Audio('audio/answerme.mp3');
const audio2 = new Audio('audio/lookinmyeyes.mp3');
const audio3 = new Audio('audio/tellmewhy.mp3');
const audio4 = new Audio('audio/cancan.mp3');

button1.addEventListener('click', () => {
    audio1.play();
});

button2.addEventListener('click', () => {
    audio2.play();
});

button3.addEventListener('click', () => {
    audio3.play();
});

button4.addEventListener('click', () => {
    audio4.play();
});