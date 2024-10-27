
window.addEventListener('load', async function() {
  let text;
  let author;
  try{
  const response = await fetch('http://localhost:1212/db/random')
  if(!response.ok) {
    throw new Error('Error getting data')
  }
  const data = await response.json();
  text = data.passage;
  author = data.author;

  const passageText = document.getElementById('textPassage');
 
  // Wrap each character in a span and append to passageText
  text.split('').forEach((char) => {
  const span = document.createElement('span');
  span.textContent = char;
  passageText.appendChild(span);
  });
  
 
  

  const authorDisplay = document.getElementById('authorBox');
  authorDisplay.textContent = (`By: ${author}`)

  const passageWords = passageText.textContent.split(' ');

  const passageCharacters = passageText.textContent.split('')


  const inputBox = document.getElementById('typingBox');

  let passageIndex = 0;
  let storedWords = [];
  let timerStarted = false;
  let time = passageCharacters.length * 0.7;// fixed rate depending on passage length 
  let numCorrectEntries =0;
  let passageWordIndex = 0;
  let typedEntries = 0;
  let userHasMadeNoError = true; //state machine for when user input is right or wrong...
  let firstWrongChar = 0;
  let userCantBackspaceAnyFurtherBack = 0;
  let canMoveForward = true
  const timerDisplay = document.getElementById('timerDisplay');
  const wpmDisplay = document.getElementById('wpmDisplay');


inputBox.addEventListener('input', function handleKeyTyping(event) {
  checkForMatch();
});



inputBox.addEventListener('keydown', function(event) {


  if (event.key != 'Shift' && event.key != 'CapsLock' && userHasMadeNoError == true ) { //any other value besides these two will be considered an entry and starts the timer
    if (event.key != "Backspace"){
      typedEntries++
    }

    let secondsPassed = 0;
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
          

        matchChar(event);
        ensureSpacing(event);
  }



     
    //handles the bulk of typing, tracks correct and incorrect characters, takes care of backspacing
    function matchChar(event){
      const inputText = inputBox.value // Simulate the input value after key press
      const trackCorrectChars = document.querySelectorAll('span')
      console.log(trackCorrectChars.length);

      if ((event.key === "Backspace" || event.key === " ") || !event.repeat) {//user can not hold down any key besides backspace or space


      if(event.key === "Backspace" && passageIndex > userCantBackspaceAnyFurtherBack && inputBox.value !== '' ){
        
        handleBackspace(trackCorrectChars);
          
        }
        else if (canMoveForward && event.key === passageCharacters[passageIndex] && event.repeat !== '' ) {
          
          passageIndex++;
          numCorrectEntries++;
          for (let i = 1; i <= passageIndex ; i++){
            trackCorrectChars[i-1].style.color = "#A8DADC" ;
            inputBox.style.backgroundColor = "transparent";

          }      
          firstWrongChar = 0;
          canMoveForward = true
        }
        else if (event.key != "Backspace" && event.repeat !== '' ) {
          
          // Reset the style of the character at passageIndex
          if(passageIndex < trackCorrectChars.length){
          trackCorrectChars[passageIndex].style.color = "black";
          trackCorrectChars[passageIndex].style.backgroundColor = "#F4A5AE";
          inputBox.style.backgroundColor = "transparent"
          }

          canMoveForward = false
          passageIndex++
        }   
      }
        
  }


    function ensureSpacing(event){ //makes sure that the user makes a space to go to next word if input matches current word user is on
      if (event.key === ' ' && userHasMadeNoError) { // Check if the space bar is pressed
        const inputWords = inputBox.value.trim().split(' '); // Get the input words and trim any extra spaces
        if (inputWords[inputWords.length - 1] === passageWords[passageWordIndex]) { // clears the input box once the words match and user spaces to move to next word
          storedWords.push(inputWords[inputWords.length - 1]);
          inputBox.value = ''; // Clear the input box    
          passageWordIndex++;
          userCantBackspaceAnyFurtherBack = passageIndex ; //user won't be able to backspace any further back then after the space goes through so they will be just before the word starts
        }
    
      } // Makes user have to input a space to move on to next word and reset the typing box
    
    }
    
  });



  function checkForMatch(){
    const trackCorrectChars = document.querySelectorAll('span')
    // checks to see if the input is equal to the passage and if it is will disable the input box
    if (storedWords.length === passageWords.length && storedWords.join(' ') === passageWords.join(' ')){
      inputBox.style.backgroundColor = "transparent"
      inputBox.disabled = true; 
      time = 0;
      inputBox.remove();
    }  
  }

  function handleBackspace(trackCorrectChars){
    canMoveForward = true

    // Reset the style of the character at passageIndex
    trackCorrectChars[passageIndex].style.color = "black"
    trackCorrectChars[passageIndex].style.backgroundColor = "transparent"
    inputBox.style.backgroundColor = "transparent"
    passageIndex--



    // Remove red highlights from the current position to the end
    for (let i = passageIndex; i < trackCorrectChars.length; i++ ){
      trackCorrectChars[i].style.color = "black"
      trackCorrectChars[i].style.backgroundColor = "transparent"
      inputBox.style.backgroundColor = "transparent"
    }
  }


}catch(error){
  throw new Error(error)
}
});





