document.querySelector('.fa').addEventListener("click",pronounce);

function pronounce() {
  var utterance = new SpeechSynthesisUtterance();
  utterance.text = this.dataset.word;
  window.speechSynthesis.speak(utterance);
}