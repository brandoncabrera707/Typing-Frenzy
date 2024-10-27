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