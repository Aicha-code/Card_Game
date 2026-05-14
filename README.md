# Memory Card Game

A challenging memory-based card game built with HTML, CSS, and JavaScript. Test your memory skills by clicking cards in the correct numerical or hexadecimal sequence across multiple levels.

## Features

- **Progressive Difficulty**: Four levels with increasing complexity
  - Level 1: Numbers 1-10
  - Level 2: Numbers 1-15
  - Level 3: Numbers 1-20
  - Level 4: Hexadecimal values (1-9, A-F)
- **Interactive Gameplay**: Click cards to reveal and match the sequence
- **Visual Feedback**: Cards flip with smooth animations
- **Level Completion**: Modal notifications for level progression
- **Responsive Design**: Clean, modern interface

## Live Demo

Play the game online: [Memory Card Game Live Demo](https://aicha-code.github.io/Card_Game/)

## How to Play

1. The game starts with Level 1, displaying shuffled cards showing "?".
2. Click the cards in ascending order (1, 2, 3, etc.) to reveal them.
3. If you click the correct card, it stays flipped; incorrect clicks temporarily reveal the wrong card.
4. Complete the sequence to advance to the next level.
5. Reach Level 4 for hexadecimal challenges.
6. Finish all levels to complete the game!

## Installation & Setup

1. Clone or download the repository.
2. Open `game.html` in your web browser.
3. Start playing immediately - no additional setup required.

## Technologies Used

- **HTML5**: Structure and markup
- **CSS3**: Styling and animations
- **JavaScript (ES6)**: Game logic and interactivity

## Project Structure

```
card_game_final/
├── game.html          # Main game interface
├── menu.html          # Information page
├── script.js          # Game logic and event handlers
├── style.css          # Styling and animations
└── README.md          # Project documentation
```

## Game Rules

- Cards are shuffled at the start of each level.
- You must click cards in exact sequential order.
- Incorrect clicks provide brief feedback but don't reset progress.
- The game tracks your current level and sequence position.

## Contributing

Feel free to submit issues or pull requests for improvements.

## License

This project is open source and available under the [MIT License](LICENSE).
