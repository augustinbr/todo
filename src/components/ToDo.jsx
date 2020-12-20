import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'



class ToDo extends React.Component {
    render() {
        return (
            <div>
                <ul className="list">
                {this.props.toDos.map(function(item, i) {
                    return (
                    <div className="item__todo">
                        <li key={item.id} className="list__item"
                        style={{
                            textDecoration: item.completed ?
                            'line-through'
                            : 'none',
                            color: item.completed ?
                            '#61b15a'
                            : '#ff9d72',
                        }}>
                        {item.toDo}</li>
                        <button type="button" className="btn_todo"
                        onClick={() => this.props.handleCheck(item.id)}>
                        <FontAwesomeIcon icon={faCheck} style={{color: "#61b15a"}}/>
                        </button>  
                        <button type="button" className="btn_todo"
                        onClick={() => this.props.handleRemove(item.id)}>
                        <FontAwesomeIcon icon={faTrash} style={{color: "#e8505b"}} />
                        </button>                                              
                    </div>
                    )
                }, this)}               
                </ul>    
            </div>
        )
    }
}


export default ToDo;