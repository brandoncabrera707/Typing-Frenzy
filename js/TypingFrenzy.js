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

  const passageText= document.querySelector('#textPassage');
  passageText.textContent= text;

  const authorDisplay = document.querySelector('#authorBox');
  authorDisplay.textContent = (`By: ${author}`)

  const passageWords = passageText.textContent.split(' ');
  const passageCharacters = passageText.textContent.split('')

  const inputBox = document.querySelector('#typingBox');

  let passageIndex = 0;
  let storedWords = [];
  let timerStarted = false;
  let seconds = passageCharacters.length * 0.7;// fixed rate depending on passage length
  let numWrongEntries = 0;
  let numCorrectEntries =0;
  let passageWordIndex = 0;
  let typedEntries = 0;


  const timerDisplay = document.querySelector('#timerDisplay');
  const wpmDisplay = document.querySelector('#wpmDisplay');


inputBox.addEventListener('input', function handleKeyTyping(event) {
  checkForMatch();
});


inputBox.addEventListener('keydown', function(event) {

const inputText = inputBox.value + event.key; // Simulate the input value after key press
const lastChar = inputText[inputText.length - 1]; // Get the last character typed
 

if (event.key != 'Backspace' && event.key != 'Shift' && event.key != 'CapsLock') { //any other value besides these three will be considered an entry

  typedEntries++
  console.log(`Total typed entries: ${typedEntries}`);


  let secondsPassed = 0;
  let wpmInterval;
        
  if (!timerStarted) {

    timerStarted = true;

    TimeInterval = setInterval(function() { //updates the time on the screen every second
      if (seconds > 0) {
        seconds--;
        timerDisplay.innerHTML = (`Seconds remaining: ${seconds.toFixed(0)}`);   
        
        } else {
          clearInterval(TimeInterval);  //Time will stop updating every seconds
          clearInterval(wpmInterval);   //WPM will stop updating every 3 seconds
          timerDisplay.innerHTML = ("Time's up!");
          inputBox.disabled = true; // Disable the input box when the time is up
        }
       
      }, 1000);
    
          
    wpmInterval = setInterval(function() {
      let secondsGiven = passageCharacters.length * 0.7;  
      secondsPassed = secondsGiven - seconds;
      let elapsedTimeInMinutes = secondsPassed / 60;
      let wordsPerMinute = ((typedEntries / 5)) / elapsedTimeInMinutes;// this is the WPM formula used by Speed Typing Online 
      if (wordsPerMinute > 0){
      wpmDisplay.innerHTML = (`WPM ${wordsPerMinute.toFixed(0)}`);
     }
    }, 2500); // displays the wpm every 2.5 seconds on the page 
  }
        

      matchChar();

}
      ensureSpacing(event);
     
    //checks to see if last char of current input matches
    function matchChar(){
      if (lastChar === passageCharacters[passageIndex]) {
        passageIndex++;
        numCorrectEntries++;
        console.log(`Correct entries: ${numCorrectEntries}`);
        inputBox.style.backgroundColor ="transparent";
        } 
        else {
        inputBox.style.backgroundColor = "pink";
        //numWrongEntries++;
        console.log(`Wrong entries: ${numWrongEntries}`);
    }  
    }


    function ensureSpacing(event){
      if (event.key === ' ') { // Check if the space bar is pressed
        const inputWords = inputBox.value.trim().split(' '); // Get the input words and trim any extra spaces
    
        if (inputWords[inputWords.length - 1] === passageWords[passageWordIndex]) { // cleats the input box once the words match and user spaces to move to next word
          storedWords.push(inputWords[inputWords.length - 1]);
          inputBox.value = ''; // Clear the input box    
          passageWordIndex++;
        }
    
      } // Makes user have to input a space to move on to next word and reset the typing box
    
    }
    
  });



  function checkForMatch(){
    // checks to see if the input is equal to the passage and if it is will disable the input box
    if (storedWords.length === passageWords.length && storedWords.join(' ') === passageWords.join(' ')){
      inputBox.disabled = true; 
      inputBox.style.backgroundColor ="transparent"
      seconds = 0;
    }    

  }
}catch(error){
  throw new Error(error)
}
});





