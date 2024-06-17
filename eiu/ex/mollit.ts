interface Card {
  suit: 'Hearts' | 'Diamonds' | 'Clubs' | 'Spades';
  rank: '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'Jack' | 'Queen' | 'King' | 'Ace';
  value: number;
}

class Deck {
  private cards: Card[];

  constructor() {
    this.cards = [];
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
    for (const suit of suits) {
      for (const rank of ranks) {
        this.cards.push({ suit, rank, value: ranks.indexOf(rank) + 1 });
      }
    }
  }

  public shuffle(): void {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  public drawCard(): Card {
    return this.cards.splice(Math.floor(Math.random() * this.cards.length), 1)[0];
  }
}

const deck = new Deck();
deck.shuffle();
const drawnCard = deck.drawCard();
console.log(`You drew a ${drawnCard.rank} of ${drawnCard.suit}`);
