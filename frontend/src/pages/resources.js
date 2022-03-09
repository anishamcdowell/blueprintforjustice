import React from 'react';
import { useHistory, withRouter } from 'react-router-dom';

const Resources = () => {
    let history = useHistory()

    let handleSubmit = (e) => {
        e.preventDefault()
        // ...
        history.push()
    }

    return (
        <div>
            <section className='resource_icons'>
            **MICHELLE**
            </section>
            <section className='carousel'>
            **PAIGE**
            </section>
        </div>
    )
}
export default withRouter(Resources);