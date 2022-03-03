import React from 'react'
import { useHistory, withRouter } from 'react-router-dom'

const Form = (props) => {
    let history = useHistory()

    let handleSubmit = (e) => {
        e.preventDefault()
        // ...
        history.push()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='form_group'>
                    <label>Enter your city:</label>
                    <input value={this.state.location} onChange={this.onLocationChange} />
                </div>
                <input type="submit" value="Submit"></input>
            </form>
        </div>       
    )
}

export default withRouter(Form)

