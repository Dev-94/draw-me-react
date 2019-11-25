import React from 'react'
import RandomDisplay from '../Components/RandomDisplay'
import Generate from '../Components/Generate'
import { adjectives, nouns } from '../words'

class RandomPage extends React.Component {
    constructor() {
        super()
        this.state = {
            // adjective: 'funny',
            // noun: 'dog',
            words: 'fat bunny',
            hasBeenClicked: false
        }

    }
    // set state with words



    render() {

        return (
            <div>

                <RandomDisplay
                    randomAdjective={this.state.words}
                    randomNoun={this.state.noun} />
                <Generate
                    onClick={this.generate}
                />
            </div >

        )

    }


}

export default RandomPage