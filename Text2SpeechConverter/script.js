let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

function getVoices() {
    var voices = window.speechSynthesis.getVoices();
    if(voices.length === 0){
        return;
    }
}

window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice,i) => (voiceSelect.options[i] = new Option(voice.name, i)))
}

voiceSelect.addEventListener("change", ()=>{
    speech.voice = voices[voiceSelect.value];
})

document.querySelector("button").addEventListener("click", ()=>{
    speech.text = document.querySelector("textarea").value;
    // speech.voice = speechSynthesis.getVoices()[1];
    // speechSynthesis.speak(speech);
    window.speechSynthesis.speak(speech);
})