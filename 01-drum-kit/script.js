/* listen for keys
A S D F G H J K L */

dic = {
    'KeyA': './sounds/clap.wav',
    'KeyS': './sounds/hihat.wav',
    'KeyD': './sounds/kick.wav',
    'KeyF': './sounds/openhat.wav',
    'KeyG': './sounds/boom.wav',
    'KeyH': './sounds/ride.wav',
    'KeyJ': './sounds/snare.wav',
    'KeyK': './sounds/tom.wav',
    'KeyL': './sounds/tink.wav'
}

function playSound(key_code) {

    if (key_code in dic) {
        const music = new Audio(dic[key_code]);
        music.play();
    }
}

function animateButton(key_code) {

    const button = document.getElementById(key_code);
    button.classList.toggle('playing');
    
    setTimeout(function() {
        button.classList.toggle('playing');
    }, 75);

}

function logKey(e) {

    playSound(e.code);
    animateButton(e.code);
}

document.addEventListener('keypress', logKey);