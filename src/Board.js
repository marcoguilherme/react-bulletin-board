import React, { Component } from 'react';
import Note from './Note';

class Board extends Component {
    constructor(props){
        super(props)
        this.state = {
            notes: [
                {
                    id: 1,
                    title: "Feed dog",
                    message: "don't forget the water"
                },
                {
                    id: 2,
                    title: "buy food",
                    message: "6 carrot and potatoes"
                }
            ]
        }
        this.eachNote = this.eachNote.bind(this);
    }

    eachNote(note, i){
        return (
            <Note key={i}
                  index={i} title={note.title}>
                  {note.message}
            </Note>
        )
    }

    render(){
        return(
            <div className="board">
                {this.state.notes.map(this.eachNote)}
            </div>
        )
    }
}

export default Board;