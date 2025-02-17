// Generate a random number between 1 and 20 for the secret number
let secret = Math.floor(Math.random() * 20) + 1;

let guess;

// Start the loop
while (true) {
    let answer = prompt("Please guess the secret number (1-20)"); // Prompt for input
    guess = parseInt(answer); // Convert input to integer

    // Check if the guess is correct
    if (guess === secret) {
        alert("Correct Guess!"); // Correct guess message
    } else if (guess < secret) {
        alert("Incorrect, too low"); // Guess is too low
    } else if (guess > secret) {
        alert("Incorrect, too high"); // Guess is too high
    }  
    break; // Exit the loop 
}
