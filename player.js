import Card from './Card.js';

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    addCard(card) {
        this.hand.push(card);
    }

    showHand() {
        console.log(`${this.name}'s hand: `);
        console.log(this.hand);
    }

    getValue() {
        let total = 0;
        for (let card of this.hand) {
            if (card.value === "Jack" || card.value === "Queen" || card.value === "King") {
                total += 10;
            } else if (card.value === "Ace") {
                total += 11;
            } else {
                total += parseInt(card.value);
            }
        }
        return total;
    }
}

export default Player;