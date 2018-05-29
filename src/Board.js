import React, { Component } from 'react';
import Note from './Note';
import FaPlus from 'react-icons/lib/fa/plus'

class Board extends Component {
    constructor(props){
        super(props)
        this.state = {
            notes: []
        }
        this.add = this.add.bind(this);
        this.eachNote = this.eachNote.bind(this);
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
        this.nextId = this.nextId.bind(this);
    }

    add(text) {
		this.setState(prevState => ({
			notes: [
				...prevState.notes,
				{
					id: this.nextId(),
					note: text
				}
			]
		}))
	}

	nextId() {
		this.uniqueId = this.uniqueId || 0
		return this.uniqueId++
	}

    update(newText, i){
        this.setState(prevState => ({
            notes: prevState.notes.map(
                note => (note.id !== i) ? note : {...note, note: newText}
            )
        }))
    }

    remove(id){
        this.setState(prevState =>({
            notes: prevState.notes.filter(note => note.id !== id)
        }))
    }

    eachNote(note, i) {
		return (
			<Note key={i}
				  index={i}
				  onChange={this.update}
				  onRemove={this.remove}>
				  {note.note}
		    </Note>
		)
	}

    render(){
        return(
            <div className="board">
                <h1>Bulletin Board</h1>
                {this.state.notes.map(this.eachNote)}
                <button className="actionAdd"
                        onClick={this.add.bind(null, "New note")}>
                    <FaPlus />
                </button>
            </div>
        )
    }
}

export default Board;