import React from 'react'
import './Generate.css'
import { adjectives, nouns } from '../words'

class Generate extends React.Component {

    // constructor(props) {
    //     super(props)
    //     // this.state = {
    //     //     hasBeenClicked: false,

    // }




    // handleClick sets off random words and sends back to RandomPage which updates view in RDisplay




    // how do i kick back to randomPage
    handleClick = () => {
        console.log('clicked!')

    }




    render() {

        return (
            <div className="g-div" >
                <button onClick={this.handleClick}>Generate</button>

            </div>

        )

    }




}

export default Generate