import React from 'react'
import RandomDisplay from '../Components/RandomDisplay'
import Generate from '../Components/Generate'
import { adjectives, nouns } from '../words'

class RandomPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            adjective: 'funny',
            noun: 'dog',
            hasBeenClicked: false
        }

    }
    randomAdjective = (event) => {
        let max = adjectives.length
        let randomNum = Math.floor(Math.random() * Math.floor(max))
        console.log(adjectives[randomNum])
        let adjective = adjectives[randomNum]
        return adjective
    }

    randomNoun = (event) => {
        let max = nouns.length
        let randomNum = Math.floor(Math.random() * Math.floor(max))
        console.log(nouns[randomNum])
        let noun = nouns[randomNum]
        return noun

    }
    random(event) {
        this.randomAdjective()
        this.randomNoun()
    }
    words = (adjective, noun) => {
        console.log('words')
        this.random()
        this.setState({
            adjective: adjective,
            noun: noun
        })

    }


    render() {

        return (
            <div>

                <RandomDisplay
                    randomAdjective={this.state.adjective}
                    randomNoun={this.state.noun} />
                <Generate
                    onClick={this.words}
                />
            </div >

        )

    }


}

export default RandomPage