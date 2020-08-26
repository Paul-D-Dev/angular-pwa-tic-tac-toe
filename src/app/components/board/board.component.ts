import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  squares: any[];
  xIsNext: boolean;
  winner: string;
  botTurn: boolean;
  end: boolean;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame(): void  {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = Math.random() >= 0.5;
    this.botTurn = !this.xIsNext;
    this.end = false;
    if (this.botTurn) {
      this.botMove(this.botTurn);
    }
  }

  player(): string {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number): void {
    if (!this.winner) {
      if (!this.squares[idx] && this.xIsNext) {
        this.move(this.xIsNext, idx);
      }
      this.botMove(this.botTurn);
    }
  }

  move(bool: boolean, idx?: number) {
    if (bool === this.xIsNext) {
      this.squares.splice(idx, 1, this.player());
    } else {

      this.squares.splice(idx, 1, this.player());
    }
    this.winner = this.calculateWinner();
    this.xIsNext = !this.xIsNext;
  }


  botMove(bool: boolean) {
    const id = this.randomIndex();
    this.move(bool, id);
  }
  randomIndex(): number {
    const index = [];

    for (let i = 0; i < this.squares.length; i++) {
      if (this.squares[i] === null ) {
        index.push(i);
      }
    }
    const random = index[Math.floor(Math.random() * index.length)];
    return random;
  }



  calculateWinner(): string {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const line of lines) {
      const [a, b, c] = line;
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }
}
