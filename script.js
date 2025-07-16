const buttons = {
    button1: { audio: new Audio('audio/answerme.mp3'), glowClass: 'glowing-1' },
    button2: { audio: new Audio('audio/lookinmyeyes.mp3'), glowClass: 'glowing-2' },
    button3: { audio: new Audio('audio/tellmewhy.mp3'), glowClass: 'glowing-3' },
    button4: { audio: new Audio('audio/cancan.mp3'), glowClass: 'glowing-4' }
};

let currentlyPlaying = null;

Object.keys(buttons).forEach(id => {
    const button = document.getElementById(id);
    const audio = buttons[id].audio;
    const glowClass = buttons[id].glowClass;

    button.addEventListener('click', () => {
        if (currentlyPlaying) {
            currentlyPlaying.audio.pause();
            currentlyPlaying.audio.currentTime = 0;
            document.getElementById(currentlyPlaying.id).classList.remove(currentlyPlaying.glowClass);
        }

        audio.play();
        button.classList.add(glowClass);
        currentlyPlaying = { id, audio, glowClass };

        audio.onended = () => {
            button.classList.remove(glowClass);
            currentlyPlaying = null;
        };
    });
});