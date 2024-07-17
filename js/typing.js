window.addEventListener('load', function() {
  const passageText = document.querySelector('.text-passage');
  passageText.textContent = 'This is a sample passage';
  const passage = passageText.textContent.split('');
  

  const inputBox = document.querySelector('.typingBox');
  const userPassage = document.querySelector('.displayUserInput');

  

  inputBox.addEventListener('input', function handleKeyTyping(event) {
    const inputText = inputBox.value.split('');
    userPassage.textContent = inputBox.value;
    let correctValues = 0, totalValues = 0, wrongValues = 0;

    allotedTimeCountdown(passage.length)

    for (let i = 0; i < inputText.length; i++) {
      if (inputText[i] === passage[i]) {
        correctValues++;
      } else {
        wrongValues++;
        break;
      }
      totalValues++;
    }
    let secondspassed =0;
    let wordsPerMinute = (correctValues/5)/ (secondspassed * 60) ;    
  });


});



function allotedTimeCountdown(passageLength){
  let seconds = passageLength * 1.5;
  let secondspassed = 0;
  setInterval(function allotedTime(){
    const inputBox = document.querySelector('.typingBox');
    if (inputBox.value != ""){
      console.log(seconds);
      seconds--;
      secondspassed++;
    }
    return secondspassed;
  }, 1000);

}


