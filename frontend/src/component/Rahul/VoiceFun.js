


export const textTospeechFun = (text) => {
    let voices = window.speechSynthesis.getVoices()[3];
    console.log(voices);

    console.log('voiceFun working', text);
     const utternance =  new SpeechSynthesisUtterance(text);
     if(window.speechSynthesis.getVoices()[3] === null) {
        console.log('empty gfbkjhnhfj');
     }
    utternance.voice =  voices ;
    window.speechSynthesis.speak(utternance);
      

}


// export const textTospeechFun =(text) => {
//     console.log('text working');
//     // Check if the browser supports the SpeechSynthesis API
//     if ('speechSynthesis' in window) {
//       // Create a new SpeechSynthesisUtterance instance
//       const message = new SpeechSynthesisUtterance(text);
  
//       // Use the default voice
//       message.voice = speechSynthesis.getVoices()[0];
  
//     //   Speak the text
//       speechSynthesis.speak(message);
//     } else {
//       console.log('Speech synthesis is not supported.');
//     }
//   }
  
