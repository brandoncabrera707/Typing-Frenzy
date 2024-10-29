function handleTimer(){
  let time = passageCharacters.length * 0.7;// fixed rate depending on passage length   
  let timerStarted = false;
  const timerDisplay = document.getElementById('timerDisplay');
  let wpmInterval;

  if (!timerStarted) {//will start timer count down once user starts inputting
    timerStarted = true;
    TimeInterval = setInterval(function() { //updates the time on the screen every second
      if (time > 0) {
        time--;
        let  minutes = Math.floor(time/60);
        let seconds = time - minutes * 60;
        if(seconds<10){
          timerDisplay.innerHTML = (`${minutes}:0${seconds.toFixed(0)}`); 
        }
        else{
          timerDisplay.innerHTML = (`${minutes}:${seconds.toFixed(0)}`); 
        }
      } 
      else {
        clearInterval(TimeInterval);  //Time will stop updating every seconds
        clearInterval(wpmInterval);   //WPM will stop updating every 2.5 seconds
        timerDisplay.innerHTML = ("Time's up!");
        inputBox.disabled = true; // Disable the input box when the time is up
      }
    
      }, 1000);
  }
}



function handleWordsPerMinute(){

  const wpmDisplay = document.getElementById('wpmDisplay');
  let secondsPassed = 0;

  wpmInterval = setInterval(function() {
    let secondsGiven = passageCharacters.length * 0.7;  
    secondsPassed = secondsGiven - time;
    let elapsedTimeInMinutes = secondsPassed / 60;
    let wordsPerMinute = ((numCorrectEntries / 5)) / elapsedTimeInMinutes;// this is the WPM formula used by Speed Typing Online 
    if (wordsPerMinute >= 0){
    wpmDisplay.innerHTML = (`WPM: ${wordsPerMinute.toFixed(0)}`);
   }
  }, 2500); // displays the wpm every 2.5 seconds on the page 
}