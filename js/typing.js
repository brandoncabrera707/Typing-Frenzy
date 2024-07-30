window.addEventListener('load', function() {
  const passageText = document.querySelector('.text-passage');
  passageText.textContent = 'Choco is crazy boy, Choco is good boy.';
  const passageWords = passageText.textContent.split(' ');
  const passageCharacters = passageText.textContent.split('')



  const inputBox = document.querySelector('.typingBox');
  const userPassage = document.querySelector('.displayUserInput');


  let numCorrectValues = 0;
  let wrongValues = 0;
  let wordsPerMinute = 0;
  let passageIndex =0;
  let storedWords = [];
  let timerStarted = false;
  let seconds = passageCharacters.length * 0.7;// fixed rate depending on passage length

inputBox.addEventListener('input', function handleKeyTyping(event) {
  const inputText=inputBox.value.split('')
  const inputWords = inputBox.value.split(' ');
  for (let i = 0; i < inputWords.length ; i++){
    if (inputWords[i] === passageWords[passageIndex]){
      storedWords.push(inputWords[i]);
      inputBox.value = '';
      numCorrectValues += passageWords[passageIndex].length;
      console.log(numCorrectValues);
      passageIndex++
      break;
    }
  
}

  if (storedWords.length === passageWords.length && storedWords.join(' ') === passageWords.join(' ')){
    inputBox.disabled = true; 
    seconds = 0;
    console.log(numCorrectValues);
  }      
      let secondspassed = 0;
      let interval;
      
      if (!timerStarted) {
      timerStarted = true;
      interval = setInterval(function() {
        if (seconds > 0) {
          seconds--;
          let secondsGiven = passageCharacters.length * 0.7;  
          secondspassed = secondsGiven - seconds;
          console.log(`Seconds remaining: ${seconds.toFixed(0)}`);
          let elapsedTimeInMinutes = secondspassed / 60;
          let wordsPerMinute = (numCorrectValues / 5) / elapsedTimeInMinutes;// words on average are 5 chaacters in length
       
          } else {
            clearInterval(interval);
            console.log("Time's up!");
            inputBox.disabled = true; // Disable the input box when the time is up
          }
        }, 1000);
        
      }
      
    



  });
});





