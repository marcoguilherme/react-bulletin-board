import React, { Component } from 'react'
import FaEdit from 'react-icons/lib/fa/edit'
import FaTrash from 'react-icons/lib/fa/trash'
import FaFloppyO from 'react-icons/lib/fa/floppy-o'

class Note extends Component {
    constructor(props){
        super(props)
        this.state = {
            editing: false
        }
        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.renderDisplay = this.renderDisplay.bind(this);
        this.save = this.save.bind(this);
    }
    edit(){
        this.setState({
            editing: true
        })
    }
    delete(){
        console.log('removed');
    }
    save(){
        alert(this._newText.value);
    }
    renderForm(){
        return(
            <div className="noteForm">
                <form>
                    <textarea ref={ input => this._newText = input } />
                    <button onClick={ this.save } className="actionSave"><FaFloppyO /></button>
                </form>
            </div>
        )
    }

    renderDisplay(){
        return(
            <div className="note">
                <div className="title">
                {this.props.title}
                </div>
                <div className="message">
                {this.props.children}
                </div>
                <div className="action">
                    <button onClick={ this.edit } className="actionEdit"><FaEdit /> </button>
                    <button onClick={ this.delete } className="actionDelete"><FaTrash /> </button>
                </div>
            </div>
        )
    }
    render(){
        return this.state.editing ? this.renderForm() : this.renderDisplay();
        
    }
}

export default Note