import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons'




class UserInput extends React.Component {
    render() {
        return (
            <div>
            <div className="title">
                <h3>New To DO bro !</h3>
            </div>
            <div >
                <form className="input__form" onSubmit={this.props.handleSubmit}>
                    <label>
                        <input className="input" type="text" value={this.props.userInput} onChange={this.props.handleChange} />
                    </label>
                    <button type="submit"  className="btn__submit" ><FontAwesomeIcon icon={faPlus} /></button>
                </form>
            </div>

            </div>
        )
    }
}


export default UserInput;