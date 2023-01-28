import Card from './Card.js';

class Deck {
    constructor() {
        this.suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        this.values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
        this.cards = [];

        for (let suit of this.suits) {
            for (let value of this.values) {
                this.cards.push(new Card(suit, value, `${value} of ${suit}`));
            }
        }
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    deal(player, num) {
        for (let i = 0; i < num; i++) {
            player.addCard(this.cards.pop());
        }
    }
}

export default Deck;