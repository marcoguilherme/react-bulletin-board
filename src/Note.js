import React, { Component } from 'react'
import FaEdit from 'react-icons/lib/fa/edit'
import FaTrash from 'react-icons/lib/fa/trash'

class Note extends Component {
    render(){
        return(
            <div className="note">
                <div className="title">
                    Job Interview
                </div>
                <div className="message">
                    Don't forget the job interview on friday.
                </div>
                <div className="action">
                    <button className="actionEdit"><FaEdit /> </button>
                    <button className="actionDelete"><FaTrash /> </button>
                </div>
            </div>
        )
    }
}

export default Note