import React from 'react'
import RandomDisplay from '../Components/RandomDisplay'
import Generate from '../Components/Generate'
import { adjectives, nouns } from '../words'

class RandomPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            adjective: '',
            noun: '',
            // hasBeenClicked: false
        }

        // creates random adjectives and nouns
        // setState to returns
        // set 'Generate' button to roll dice



        function randomAdjective() {
            let max = adjectives.length
            let randomNum = Math.floor(Math.random() * Math.floor(max))
            console.log(adjectives[randomNum])
        }

        function randomNoun() {
            let max = nouns.length
            let randomNum = Math.floor(Math.random() * Math.floor(max))
            console.log(nouns[randomNum])
        }


        // if button is clicked generate new adj and noun, pass through to randomPage and set at Adj and Noun component


    }





    render() {

        return (
            <div>

                <RandomDisplay
                    randomAdjective={this.state.randomAdjective}
                    randomNoun={this.state.noun} />
                <Generate />
            </div >

        )

    }


}

export default RandomPage