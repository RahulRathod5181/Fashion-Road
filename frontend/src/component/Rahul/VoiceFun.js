

let voices = window.speechSynthesis.getVoices();


export const textTospeechFun = (text) => {
     const utternance =  new SpeechSynthesisUtterance(text);
    utternance.voice =  window.speechSynthesis.getVoices()[3] ;
    speechSynthesis.speak(utternance);
}

