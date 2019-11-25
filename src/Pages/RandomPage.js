import React from 'react'
import RandomDisplay from '../Components/RandomDisplay'
import Generate from '../Components/Generate'
import { adjectives, nouns } from '../words'

class RandomPage extends React.Component {
    constructor() {
        super()
        this.state = {
            words: '',
        }

    }
    // update state with words generated



    render() {
        return (
            <div>
                <RandomDisplay
                    words={this.state.words}
                />
                <Generate
                />
            </div >

        )

    }


}

export default RandomPage