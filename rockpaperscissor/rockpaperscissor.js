function game(player1, player2) {
    // rock crushes scissors
    // paper covers rock
    // scissors cuts paper
    player1 = player1.toLowerCase();
    player2 = player2.toLowerCase();
    let winner = "";
    if (player1 == 'rock') {
        if (player2 == "paper") {
            winner = "Player 2 wins";
        } else if (player2 == "scissor") {
            winner = "Player 1 wins";
        }
    } else if (player1 == 'paper') {
        if (player2 == 'rock') {
            winner = "Player 1 wins";
        } else if (player2 == 'scissor') {
            winner = "Player 2 wins";
        }
    } else if (player1 == 'scissor') {
        if (player2 == 'rock') {
            winner = "Player 2 wins";
        } else if (player2 == 'paper') {
            winner = 'Player 1 wins';
        }
    }
    return winner;
}
console.log(game("Scissor", "Paper"));