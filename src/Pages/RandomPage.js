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
    updateState = (randomWords) => {
        console.log(randomWords)
        this.setState({
            words = randomWords
        })
    }

    generate = () => {
        let maxAdjective = adjectives.length
        let maxNoun = nouns.length
        let adjIdx = Math.floor(Math.random() * Math.floor(maxAdjective))
        let nounIdx = Math.floor(Math.random() * Math.floor(maxNoun))
        console.log(adjectives[adjIdx] + ' ' + nouns[nounIdx])
        let randomWord = adjectives[adjIdx] + ' ' + nouns[nounIdx]
        updateState(randomWord)

    }


    render() {
        return (
            <div>
                <RandomDisplay
                    words={this.state.words}
                />
                <Generate
                    generate={this.generate}
                />
            </div >

        )

    }


}

export default RandomPage