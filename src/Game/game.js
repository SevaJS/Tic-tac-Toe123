import React from "react"
import Board from "./board";

export default class Game extends React.Component {

    render() {
        return (<div>
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-info">

                </div>
            </div>
        )
            ;
    }
}