[Home](/README.MD) | [Week 1](../../week-01/ReadMe.md) | [Week 2](../../week-02/ReadMe.md) | [Week 3](../../week-03/ReadMe.md) | [Week 4](../../week-04/ReadMe.md) | [Week 5](../../week-05/ReadMe.md) | [Week 6](../../week-06/ReadMe.md) | [Week 7](../../week-07/ReadMe.md) | [Week 8](../../week-08/ReadMe.md) | [Week 9/10](../../week-09_10/ReadMe.md)

Labs: [1](./lab-01.md) | [2](./lab-02.md) | [3](./lab-03.md) | [4](./lab-04.md) | [5](./lab-05.md) | [6](./lab-06.md) | 7

---

# Week 4 > Lab 7

## Javascript Practice: BlackJack

Build a BlackJack (aka Twenty-one) game in Javascript where the player plays against the computer. The Rules of BlackJack are as follows:

1. Aces are worth either 1 or 11, Face cards are worth 10 (aka 'ten cards'), and all other cards are worth their numerical value (2 - 9). Suits don't matter.

2. Winning:

    - If the cards add up to 21, the player wins.
    - If the cards go over 21, the player loses.
    - If no player has 21, the player that is the closest to 21 wins.
    - In the case that the players have the same value, we'll call it a tie, and nobody wins.

3. In the case of an Ace, it can be used either as a 1 or an 11. If a player is dealt an ace and a face card, they automatically win. An Ace will be used as an 11 as long as the players cards don't add up to 21. If the card values are over 10, then the Ace should be used as a 1. (e.g. If the players cards are [5, 8, A] then, A = 1, because 8 + 5 = 13, 13 + 1 = 14, but 13 + 11 = 24 and the player would lose or 'bust').

4. Dealing: The dealer receives one card face up, and one card face down. The player receives two cards face up (in our game, the player will see all cards face up since we are playing against the computer). The cards are to be dealt in a round-robin fashion. All following cards are dealt face up.

For a full description of BlackJack rules, [click here](https://www.bicyclecards.com/how-to-play/blackjack/).

### Things you'll need to do:

- Represent the deck in Javascript. Remember that an Ace could be a 1 or 11, and that Face cards are worth 10. It would be useful to represent the suit, the card within each suit (e.g. A, 1 - 9, J, Q, K). What data structure (or structures) would be useful for representing a deck?
- The deck needs to be shuffled at the beginning of a new game so you'll need some algorithm for randomizing the order of the 'cards'. *Hint: You may want to write a `shuffle` function that will shuffle the cards when given a `deck` as a parameter
- Each hand needs to show the cards for the dealer, and the cards for the player.
- The player needs to be prompted to either 'hit' or 'stand'. If they hit, they are dealt another card, if they stand then it will be the computer/dealer's turn.
- You'll need to keep track of the dealer/computer's hand and the player's hand. Every card that is dealt needs to be 'moved' from the 'deck' to a hand.
- The computer needs to decide whether it will hit/stay.
- Once both players are finished, either because the player or dealer got 21, or went over, or both players stayed, the results of the hand must be calculated and displayed (e.g. 'You Win!' or 'Dealer Wins!')

### Options

- You could do this as a console game using node and `readline-sync` with a game loop like we did for the number game.
- You could do this in the browser similarly using `prompt` and `alert`.
- You could do this in the browser using jQuery. Once you have the underlying logic of the game working, you could use images to represent the cards, and use jQuery to update the DOM to display the cards.

### Diving Deeper:

- Ask the user if they want to play again. The deck should be reshuffled for every new game.
- If the user wants to continue playing, track their score, and the dealers score between each game.
- BlackJack often uses multiple decks when played. At the start of a new round, as the user how many decks they would like to play with (e.g. 1 - 6). You should insert a special 'card' at 60 or 75 cards from the end so that when that card is drawn. You will only reshuffle the hand after the special 'card has been drawn. Note that the card is not played, it only represents that the deck is to be reshuffled next hand.
- If you haven't tried already, see if you can turn this game into a web based Javascript game with images. You can use jQuery to display images based on the hands that have been dealt.

### Diving Even Deeper:

- Try implementing your game as a "full stack" application by creating an endpoints for starting a game, dealing a hand. Your end-points will need to receive appropriate parameters for tracking the game state, and figuring out when the game is over. Using jQuery, you can send requests to the server, and update the DOM with the the new game state from the server. This is an example of a simplistic "Single Page Application".  

---
[Week 4 Home](../ReadMe.md)
