import React, { Component } from 'react';
import Note from './Note';

class Board extends Component {
    render(){
        return(
            <div className="board">
                <Note title="Alimentar os gatos" message="nao esquece do rengar" />
                <Note title="Alimentar os gatos" message="nao esquece do rengar" />
            </div>
        )
    }
}

export default Board;