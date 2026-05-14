let cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let shuffledCards = [];
let currentNumber = 1; // Start from 1
let currentLevel = 1;

function startGame() {
    alert(`Welcome to Level ${currentLevel}, Good luck!`); // Show pop-up

    if (currentLevel === 1) {
        cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Level 1
    } else if (currentLevel === 2) {
        cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; // Level 2
    } else if (currentLevel === 3) {
        cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; // Level 3
    } else if (currentLevel === 4) {
        cardValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']; // Level 4 (Hex)
    }

    shuffledCards = shuffle(cardValues.slice());
    currentNumber = 1;// reset current number for the new level
    renderCards();
    hideModal();
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap
    }
    return array;
}

function renderCards() {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = ''; // Clear previous cards

    shuffledCards.forEach((value, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-value', value);

        card.addEventListener('click', () => handleCardClick(card));

        const cardFront = document.createElement('div');
        cardFront.classList.add('card-front');
        cardFront.textContent = '?'; // Initially show ?

        const cardBack = document.createElement('div');
        cardBack.classList.add('card-back');
        cardBack.textContent = value; // Display the number on the back

        card.appendChild(cardFront);
        card.appendChild(cardBack);

        gameBoard.appendChild(card);
    });
}

function handleCardClick(card) {
    if (card.classList.contains('flipped')) return; // Ignore if already flipped

    const cardValue = card.getAttribute('data-value'); // This will be either a number or a hex string
    let expectedValue;

    if (currentLevel === 4) {
        const hexOrder = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        expectedValue = hexOrder[currentNumber - 1].toUpperCase(); // Ensure uppercase
    } else {
        expectedValue = currentNumber.toString(); // Convert to string for comparison
    }

    if (cardValue === expectedValue) { 
        card.classList.add('flipped');
        currentNumber++;

        // Check if the level is complete
        if (currentNumber > shuffledCards.length) {
            setTimeout(() => {
                showModal(); // Show the modal when the game is completed
            }, 1000);
        }
    } else {
        // Flip the incorrect card back instead of resetting the game
        card.classList.add('flipped');
        setTimeout(() => {
            card.classList.remove('flipped'); // Flip only the wrong card
        }, 1000);
    }
}

function showModal() {
    const modal = document.getElementById('congratulations-modal');
    const message = document.getElementById('modal-message'); 
    const nextButton = document.getElementById('next-button');

    if (currentLevel >= 5) {
        nextButton.style.display = 'none'; // Hide Next button
        message.textContent = 'Congrats! You completed the game'; // Final message
    } else {
        nextButton.style.display = 'block'; // Show Next button
        message.textContent = `Level ${currentLevel} completed! Ready for the next level?`;
    }

    modal.style.display = 'flex'; // Show modal
}

function hideModal() {
    const modal = document.getElementById('congratulations-modal');
    modal.style.display = 'none'; // Hide modal
}

// Event Listeners
document.getElementById('next-button').addEventListener('click', () => {
    if (currentLevel < 5) {
        currentLevel += 1; // Move to the next level
        startGame();
    }
});

document.getElementById('repeat-button').addEventListener('click', () => {
    currentLevel = 1; // Reset level back to 1
    startGame();
});

// Initialize the game
startGame();
