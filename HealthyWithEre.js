// Get HTML elements
const SignUpButton = document.getElementById('signup-button');
const messageBox = document.getElementById('message-box');
const messageText = document.getElementById('message-text');
const closeButton = document.getElementById('close-button');

// show the message box
const showMessageBox = () => {
    messageText.textContent = "Thank you for signing up! We'll be in touch soon.";
    messageBox.style.backgroundColor = '#4CAF50'; 
    
// message box visible with a fade-in and scale effect
    messageBox.classList.remove('hidden');
    setTimeout(() => {
        messageBox.classList.remove('opacity-0', 'scale-95');
        messageBox.classList.add('opacity-100', 'scale-100');
    }, 10);

// Hide the message box 
    setTimeout(() => {
        hideConfirmationMessage();
}, 3000);
}; 

  // hide the confirmation message
        const hideConfirmationMessage = () => {
            // Start the fade-out and scale-down transition
            messageBox.classList.remove('opacity-100', 'scale-100');
            messageBox.classList.add('opacity-0', 'scale-95');
            
            // Hide after the transition
            messageBox.addEventListener('transitionend', () => {
                if (messageBox.classList.contains('opacity-0')) {
                    messageBox.classList.add('hidden');
                }
                
            }, { once: true });
        };

SignUpButton.addEventListener('click', showMessageBox);
closeButton.addEventListener('click', hideConfirmationMessage);

