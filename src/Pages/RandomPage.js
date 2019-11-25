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
    updateState(state) {
        console.log('randomWords')
        this.setState((state) => {
            return this.words = this.randomWords
        }
        )
    }


    render() {
        return (
            <div>
                <RandomDisplay
                    words={this.state.words}
                />
                <Generate
                    updateState={this.state.updateState}
                    randomWords={this.randomWords}
                />
            </div >

        )

    }


}

export default RandomPage