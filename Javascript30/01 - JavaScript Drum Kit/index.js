function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // Para a toda a função se não encontrar nenhum botão correspondente
    audio.currentTime = 0; // Volta para o começo do audio
    audio.play();
    key.classList.add('playing');
}
function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // pula se não for transform
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound)
