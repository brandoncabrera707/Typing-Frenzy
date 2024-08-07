    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyBw2V9n3kuStESezzg9MtZ3vYcS95pDIqA",
      authDomain: "typingfrenzy-d59e6.firebaseapp.com",
      projectId: "typingfrenzy-d59e6",
      storageBucket: "typingfrenzy-d59e6.appspot.com",
      messagingSenderId: "381628760234",
      appId: "1:381628760234:web:7df65417a4b22b9dc690d3",
      measurementId: "G-B5WED008ED"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);



//JavaScript for website functionality 

window.addEventListener('load', function() {
  const passageText = document.querySelector('.text-passage');
  passageText.textContent = 'Choco is crazy boy. Choco is good boy. Choco loves to play socce? He is amazing boy"';
  const passageWords = passageText.textContent.split(' ');
  const passageCharacters = passageText.textContent.split('')
  console.log(passageWords);


  const inputBox = document.querySelector('.typingBox');
  const userPassage = document.querySelector('.displayUserInput');



  let passageIndex =0;
  let storedWords = [];
  let timerStarted = false;
  let seconds = passageCharacters.length * 0.7;// fixed rate depending on passage length
  let numWrongEntries = 0;
  let numCorrectEntries =0;
  let passageWordIndex = 0;
  let typedEntries = 0;


  const timerDisplay = document.querySelector('.timer-display');
  const wpmDisplay = document.querySelector('.wpm-display');

inputBox.addEventListener('input', function handleKeyTyping(event) {

// checks to see if the input is equal to the passage and if it is will disable the input box
if (storedWords.length === passageWords.length && storedWords.join(' ') === passageWords.join(' ')){
  inputBox.disabled = true; 
  seconds = 0;
}      
      

  });
  
  //let numWrongEntries = 0;
  //let numCorrectEntries =0;

  inputBox.addEventListener('keydown', function(event) {
 

  const inputText = inputBox.value + event.key; // Simulate the input value after key press
  const lastChar = inputText[inputText.length - 1]; // Get the last character typed
 
  if (event.key != 'Backspace' && event.key != 'Shift' && event.key != 'CapsLock') {

    typedEntries++
    console.log(`Total typed entries: ${typedEntries}`);


    let secondsPassed = 0;
    let wpmInterval;
        
    if (!timerStarted) {
      timerStarted = true;
      wpmInterval = setInterval(function() {
        if (seconds > 0) {
          seconds--;
          timerDisplay.innerHTML = (`Seconds remaining: ${seconds.toFixed(0)}`);   
        
          } else {
            clearInterval(wpmInterval);
            clearInterval(wpmInterval);
            timerDisplay.innerHTML = ("Time's up!");
            inputBox.disabled = true; // Disable the input box when the time is up
          }
  
         
       }, 1000);
    
          
        wpmInterval = setInterval(function() {
        let secondsGiven = passageCharacters.length * 0.7;  
         secondsPassed = secondsGiven - seconds;
        let elapsedTimeInMinutes = secondsPassed / 60;
        let wordsPerMinute = ((typedEntries / 5) - numWrongEntries) / elapsedTimeInMinutes;// this is the net WPM formula used by Speed Typing Online 
        if (wordsPerMinute > 0){
        wpmDisplay.innerHTML = (`WPM ${wordsPerMinute.toFixed(0)}`);
        }
         }, 2500); // displays the wpm every 2.5 seconds on the page 
       }
        
      
    //checks to see if the characters match 
    if (lastChar === passageCharacters[passageIndex]) {
      passageIndex++;
      numCorrectEntries++;
      console.log(`Correct entries: ${numCorrectEntries}`);
  } else {
      numWrongEntries++;
      console.log(`Wrong entries: ${numWrongEntries}`);
  }

  }


    
    if (event.key === ' ') { // Check if the space bar is pressed
      const inputWords = inputBox.value.trim().split(' '); // Get the input words and trim any extra spaces
  
      if (inputWords[inputWords.length - 1] === passageWords[passageWordIndex]) { // cleats the input box once the words match and user spaces to move to next word
        storedWords.push(inputWords[inputWords.length - 1]);
        inputBox.value = ''; // Clear the input box    
        passageWordIndex++;
      }
  
    } // Makes user have to input a space to move on to next word and reset the typing box
   
  });
});





