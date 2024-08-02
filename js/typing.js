window.addEventListener('load', function() {
  const passageText = document.querySelector('.text-passage');
  passageText.textContent = 'Choco is crazy boy, Choco is good boy, Choco loves to play soccer, He is amazing boy';
  const passageWords = passageText.textContent.split(' ');
  const passageCharacters = passageText.textContent.split('')
  

  const inputBox = document.querySelector('.typingBox');
  const userPassage = document.querySelector('.displayUserInput');


  let numCorrectCharacters = 0;
  let NumWrongEntries = 0;
  let wordsPerMinute = 0;
  let passageIndex =0;
  let storedWords = [];
  let timerStarted = false;
  let seconds = passageCharacters.length * 0.7;// fixed rate depending on passage length
  let typedEntries = 0;




inputBox.addEventListener('input', function handleKeyTyping(event) {

  
  const inputText=inputBox.value.split('')
  const inputWords = inputBox.value.split(' ');
  for (let i = 0; i < inputWords.length ; i++){
    if (inputWords[i] === passageWords[passageIndex]){
      storedWords.push(inputWords[i]);
      inputBox.value = '';
      numCorrectCharacters  += passageWords[passageIndex].length;
      passageIndex++
      break;
    }
  
}



  if (storedWords.length === passageWords.length && storedWords.join(' ') === passageWords.join(' ')){
    inputBox.disabled = true; 
    seconds = 0;
  }      
      let secondsPassed = 0;
      let interval;
      
      if (!timerStarted) {
      timerStarted = true;
      interval = setInterval(function() {
        if (seconds > 0) {
          seconds--;
          console.log(`Seconds remaining: ${seconds.toFixed(0)}`);   
      
          } else {
            clearInterval(interval);
            clearInterval(wpmInterval);
            console.log("Time's up!");
            inputBox.disabled = true; // Disable the input box when the time is up
          }

       
        }, 1000);
  
        
        wpmInterval = setInterval(function() {
        let secondsGiven = passageCharacters.length * 0.7;  
        secondsPassed = secondsGiven - seconds;
        let elapsedTimeInMinutes = secondsPassed / 60;
        let wordsPerMinute = (numCorrectCharacters / 5) / elapsedTimeInMinutes;
          console.log(wordsPerMinute);
        }, 3000);
      }
      
    



  });
});





