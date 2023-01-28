import Card from './Card.js';
import Player from './Player.js';
import Deck from './Deck.js';

const myDeck = new Deck();
console.log(myDeck.cards);
myDeck.shuffle();
console.log(myDeck.cards);

const slim = new Player("Slim");
const luke = new Player("Luke");
console.log(slim);
console.log(luke);

myDeck.deal(slim, 5);
myDeck.deal(luke, 5);
slim.showHand();
luke.showHand();
console.log(`Slim's total value: ${slim.getValue()}`);
console.log(`Luke's total value: ${luke.getValue()}`);