
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
  let typedEntries = 0;
  let userHasMadeNoError = true; //state machine for when user input is right or wrong...

inputBox.addEventListener('input', function handleKeyTyping(event) {
  checkForMatch();
});




inputBox.addEventListener('keydown', function(event) {

  if (event.key != 'Shift' && event.key != 'CapsLock' && userHasMadeNoError == true ) { //any other value besides these two will be considered an entry and starts the timer
    if (event.key != "Backspace"){
      typedEntries++
    }
      handleTimer();
      handleWordsPerMinute();
      matchChar(event);
      ensureSpacing(event);
  } 
  });

}catch(error){
  throw new Error(error)
}
});





