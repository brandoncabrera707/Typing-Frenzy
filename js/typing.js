window.addEventListener('load', function() {
  const passageText = document.querySelector('.text-passage');
  passageText.textContent = 'To question is to live, to be static over dynamic ';
  const passageWords = passageText.textContent.split(' ');
  const passageCharacters = passageText.textContent.split('')
  console.log(passageWords);
  console.log(passageCharacters);

  const inputBox = document.querySelector('.typingBox');
  const userPassage = document.querySelector('.displayUserInput');


  let correctValues = 0;
  let wrongValues = 0;
  let wordsPerMinute = 0;

inputBox.addEventListener('input', function handleKeyTyping(event) {
  const inputText=inputBox.value.split('')
  const inputWords = inputBox.value.split(' ');
  console.log(inputText);
  console.log(inputWords);
  userPassage.textContent = inputBox.value;
  
    for (let i = 0; i < passageText.length; i++) {
      if (inputText[i] === passage[i]) {
        correctValues++;
        console.log( `here is the number of correct values: ${correctValues}`);
      } else {
        wrongValues++
        break;
      }
    }
    //handleTime();
    

    function handleTime (){
      let timerStarted = false;
      let seconds = passage.length * 0.7;// fixed rate depending on passage length
      let secondspassed = 0;
      let interval;
      if (!timerStarted) {
  
      timerStarted = true;
      interval = setInterval(function() {
        if (seconds > 0) {
          seconds--;
          console.log(`Seconds remaining: ${seconds}`);
          let secondsGiven = passage.length * 0.7;  
          secondspassed = secondsGiven - seconds;
          let elapsedTimeInMinutes = secondspassed / 60;
          let wordsPerMinute = (correctValues / 5) / elapsedTimeInMinutes;// words on average are 5 chaacters in length
          } else {
            clearInterval(interval);
            console.log("Time's up!");
            inputBox.disabled = true; // Disable the input box when the time is up
          }
        }, 1000);
      }
    }



  });
});





