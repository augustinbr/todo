import React from 'react';
import UserInput from './UserInput.jsx';
import ToDo from '../components/ToDo.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toDos: [
            ],
            userInput: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
    }


    handleChange(e) {
        this.setState({
            userInput: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState(state => {
            const toDos = [...state.toDos, { id: Math.floor(Math.random() * Math.floor(1000)), toDo: state.userInput, completed: false}]
            return {
                toDos,
                userInput: '',
            };
        });
        console.log(this.state.toDos);
    };

    handleRemove(id) {
        console.log(id);
        this.setState(state => {
            const toDos = state.toDos.filter(item => item.id !== id);
            return {
                toDos,
            };
        });
    };

    handleCheck(id) {
        this.setState(sate => {
            const toDos = sate.toDos.map((item) => {
                if (item.id === id) {
                    const update = {
                        ...item,
                        completed: !item.completed,
                    };
                    return update;
                }
            })
            return {
                toDos,
            };
        })
    }

    render() {
        return (
            <div>
                <UserInput handleChange={this.handleChange} handleSubmit={this.handleSubmit} userInput={this.state.userInput} />
                <ToDo handleCheck={this.handleCheck} handleRemove={this.handleRemove} toDos={this.state.toDos} />
                <p></p>
                

                              
            </div>

        )
    }
}


export default ToDoList;