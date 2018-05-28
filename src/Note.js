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
        this.save = this.save.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.renderDisplay = this.renderDisplay.bind(this);
    }
    edit(){
        this.setState({
            editing: true
        })
    }
    delete(){
        console.log('removed');
    }
    save(e) {
		e.preventDefault()
		this.props.onChange(this._newText.value, this.props.index)
		this.setState({
			editing: false
		})
	}
    renderForm(){
        return(
            <div className="noteForm">
                <form onSubmit={ this.save }>
                    <textarea ref={ input => this._newText = input } />
                    <button className="actionSave"><FaFloppyO /></button>
                </form>
            </div>
        )
    }

    renderDisplay(){
        return(
            <div className="note">
                <div className="noteLabel">
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