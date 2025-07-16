const buttons = {
    button1: { audio: new Audio('audio/answerme.mp3'), color: '255, 153, 0' },
    button2: { audio: new Audio('audio/lookinmyeyes.mp3'), color: '255, 0, 255' },
    button3: { audio: new Audio('audio/tellmewhy.mp3'), color: '0, 255, 0' },
    button4: { audio: new Audio('audio/cancan.mp3'), color: '51, 51, 255' }
};

let currentlyPlaying = null;
let flickerInterval = null;

Object.keys(buttons).forEach(id => {
    const button = document.getElementById(id);
    const config = buttons[id];
    config.element = button;

    button.addEventListener('click', () => {
        // Track button click with Google Analytics
        gtag('event', 'button_click', {
            'event_category': 'Button Clicks',
            'event_label': id
        });

        // If another button is playing, stop it
        if (currentlyPlaying && currentlyPlaying.audio !== config.audio) {
            currentlyPlaying.audio.pause();
            currentlyPlaying.audio.currentTime = 0;
            clearInterval(flickerInterval);
            currentlyPlaying.element.style.boxShadow = 'none';
        }

        if (config.audio.paused) {
            config.audio.play();
            currentlyPlaying = config;
            startFlickering(config.element, config.color);
        } else {
            config.audio.pause();
            config.audio.currentTime = 0;
            stopFlickering();
            currentlyPlaying = null;
        }
    });

    config.audio.onended = () => {
        stopFlickering();
        currentlyPlaying = null;
    };
});

function startFlickering(element, color) {
    if (flickerInterval) {
        clearInterval(flickerInterval);
    }

    flickerInterval = setInterval(() => {
        const glowIntensity = Math.random() * 0.5 + 0.3; // Random intensity between 0.3 and 0.8
        const blurSize = Math.random() * 15 + 10;      // Random blur between 10px and 25px
        const spreadSize = Math.random() * 4 + 2;       // Random spread between 2px and 6px

        element.style.boxShadow = `0 0 ${blurSize}px ${spreadSize}px rgba(${color}, ${glowIntensity})`;
    }, 100); // Adjust interval for desired flicker speed
}

function stopFlickering() {
    if (flickerInterval) {
        clearInterval(flickerInterval);
        flickerInterval = null;
    }
    if (currentlyPlaying) {
        currentlyPlaying.element.style.boxShadow = 'none';
    }
}
