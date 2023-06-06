// Get the answer buttons
const btnA = document.getElementById('btnA');
const btnB = document.getElementById('btnB');
const btnC = document.getElementById('btnC');
const answerContainer = document.getElementById('answer-buttons');

// Add click event listeners to the buttons
btnA.addEventListener('click', checkAnswer);
btnB.addEventListener('click', checkAnswer);
btnC.addEventListener('click', checkAnswer);

let answerSelected = false; // Flag variable to track answer selection

// Function to check the selected answer
function checkAnswer(event) {
  if (answerSelected) {
    return; // Exit the function if an answer has already been selected
  }

  const selectedButton = event.target;

  // Check if the selected answer is correct
  if (selectedButton === btnC) {
    // Correct answer
    selectedButton.classList.add('correct');
  } else {
    // Incorrect answer
    selectedButton.classList.add('incorrect');
    btnC.classList.add('correct');
  }

  // Disable the answer buttons
  btnA.disabled = true;
  btnB.disabled = true;
  btnC.disabled = true;

  answerSelected = true; // Set the flag to indicate answer selection
  answerContainer.classList.add('answer-selected'); // Add the CSS class to the container
}