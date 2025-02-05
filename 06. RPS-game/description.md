# Rock, Paper, Scissors Game

This JavaScript code implements the classic game of Rock, Paper, Scissors where the player competes against the computer. The game keeps track of the scores for both the player and the computer. The first to score 3 points wins the game.

## Key Features:
- **Gameplay**: Players can choose Rock, Paper, or Scissors by clicking the corresponding buttons. The computer randomly selects one of the three options as well.
- **Score Tracking**: The game tracks the score for both the player and the computer, displaying the current score during the game.
- **Game End Logic**: The game ends once either the player or the computer reaches a score of 3. A message is displayed declaring the winner.
- **Reset Game**: After a game ends, a reset button appears that allows players to start a new game, resetting the scores and hiding the reset button.
  
## Key Functions:
- **`getRandomComputerResult()`**: Randomly selects Rock, Paper, or Scissors for the computer.
- **`hasPlayerWonTheRound()`**: Determines if the player won the round based on the choices made by both the player and the computer.
- **`getRoundResults()`**: Determines the winner of a round and updates the score accordingly.
- **`showResults()`**: Displays the results of the round, updates the scores, and checks if the game is over (i.e., if either player or computer reaches 3 points).
- **`resetGame()`**: Resets the scores and hides the reset button, allowing the player to start a new game.

## Usage:
1. **Choose an Option**: The player can choose Rock, Paper, or Scissors by clicking the corresponding button.
2. **Round Outcome**: After each round, the result of the round is displayed (who won or if it's a tie).
3. **End of Game**: The first player to reach 3 points wins the game, and a message will indicate the winner. The reset button will appear for starting a new game.

### HTML Elements:
- **Player and Computer Scores**: The scores for both the player and the computer are displayed and updated after each round.
- **Round Results**: Displays a message for each round, indicating who won or if it was a tie.
- **Winner Message**: Displays the winner message once someone reaches 3 points.
- **Reset Button**: A button to reset the game after a winner is declared.

