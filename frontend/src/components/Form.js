import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)

        // Events that will change variables will go here!
        // Example: this.onLocationChange = this.onLocationChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            // Variables will go here!
            // Example: location: ''
        }
    }

    // Handles form submit
    onSubmit = (err) => {

    }

    // Form
    // React handles form, Express handles saving the response data
    // Express sends returned response data to new page
    // New page renders using returned response data
    render = () => {
        return (
            <div>
                <form onSubmit={this.onSubmit}>

                </form>
            </div>
        )
    }
}