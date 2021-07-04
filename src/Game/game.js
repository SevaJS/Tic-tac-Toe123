import React from "react"
import Board from "./board";

export default class Game extends React.Component {
    constructor() {
        super();
        this.state = {

            squares: Array(9).fill(null),
            xIsNext: true,

        }
    };

    handleClick=(i)=> {

        const squares = this.state.squares.slice();
        if (this.calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState(
            {
                squares: squares,
                xIsNext: !this.state.xIsNext
            });
    };

    calculateWinner=(squares)=> {
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
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    render() {
        const winner = this.calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Выиграл ' + winner;
        } else {
            status = 'Следующий ход: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return (<div>
                <div className="status">{status}</div>
                <div className="game-board">
                    <Board
                        squares={this.state.squares}
                        xIsNext={this.state.xIsNext}
                        handleClick={this.handleClick}/>
                </div>
                <div className="game-info">

                </div>
            </div>
        )
            ;
    }
}
