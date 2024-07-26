window.addEventListener('load', function() {
  const passageText = document.querySelector('.text-passage');
  passageText.textContent = 'Choco is crazy boy, Choco is good boy.';
  const passageWords = passageText.textContent.split(' ');
  const passageCharacters = passageText.textContent.split('')
  console.log(passageWords);
  //console.log(passageCharacters);

  const inputBox = document.querySelector('.typingBox');
  const userPassage = document.querySelector('.displayUserInput');


  let correctValues = 0;
  let wrongValues = 0;
  let wordsPerMinute = 0;
  let passageIndex =0;
  let storedWords = [];

inputBox.addEventListener('input', function handleKeyTyping(event) {
  const inputText=inputBox.value.split('')
  const inputWords = inputBox.value.split(' ');
  console.log(storedWords);
  //console.log(inputText);
  console.log(inputWords);
  console.log(userPassage.textContent);
for (let i = 0; i < inputWords.length ; i++){
  if (inputWords[i] === passageWords[passageIndex]){
    storedWords.push(inputWords[i]);
    inputBox.value = '';
    passageIndex++
    break;
  }
}

if (storedWords.length === passageWords.length && storedWords.join(' ') === passageWords.join(' ')){
  inputBox.disabled = true; 
}


  for (let i = 0; i < passageText.length; i++) {
      if (inputText[i] === passageCharacters[i]) {
        correctValues++;
        console.log( `here is the number of correct values: ${correctValues}`);
      } else {
        wrongValues++
        break;
      }
    }
      /*let timerStarted = false;
      let seconds = passageCharacters.length * 0.7;// fixed rate depending on passage length
      let secondspassed = 0;
      let interval;
      if (!timerStarted) {
  
      timerStarted = true;
      interval = setInterval(function() {
        if (seconds > 0) {
          seconds--;
          let secondsGiven = passageCharacters.length * 0.7;  
          secondspassed = secondsGiven - seconds;
          console.log(`Seconds remaining: ${seconds}`);
          let elapsedTimeInMinutes = secondspassed / 60;
          let wordsPerMinute = (correctValues / 5) / elapsedTimeInMinutes;// words on average are 5 chaacters in length
          } else {
            clearInterval(interval);
            console.log("Time's up!");
            inputBox.disabled = true; // Disable the input box when the time is up
          }
        }, 1000);
        
      }
      */
    



  });
});





