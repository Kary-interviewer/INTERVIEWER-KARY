const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Interview questions
const questions = [
    "Welcome to the interview chatbot! What is your full name?",
    "What position are you applying for?",
    "Can you tell us about your previous work experience?",
    "Why do you want to work with us?",
    "What are your salary expectations?",
    "Thank you for your time! We'll get back to you soon."
];

let currentQuestion = 0;

// Display the first question
function displayBotMessage(message) {
    chatBox.innerHTML += <p class="bot">${message}</p>;
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function displayUserMessage(message) {
    chatBox.innerHTML += <p class="user">${message}</p>;
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

// Initialize chatbot
displayBotMessage(questions[currentQuestion]);

// Handle user input
sendBtn.addEventListener('click', () => {
    const userAnswer = userInput.value.trim();
    if (userAnswer) {
        displayUserMessage(userAnswer); // Show user's message
        userInput.value = ''; // Clear input field

        // Move to the next question
        currentQuestion++;
        if (currentQuestion < questions.length) {
            setTimeout(() => {
                displayBotMessage(questions[currentQuestion]);
            }, 500); // Delay for a natural response
        } else {
            setTimeout(() => {
                displayBotMessage("The interview has ended. Thank you!");
                sendBtn.disabled = true;
                userInput.disabled = true;
            }, 500);
        }
    }
});