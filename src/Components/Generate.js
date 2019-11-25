import React from 'react'
import './Generate.css'
import { adjectives, nouns } from '../words'


class Generate extends React.Component {
    constructor() {
        super()
        this.state = {
            hasBeenClicked: false
        }
    }

    handleClick = (e) => {
        this.setState({ hasBeenClicked: true })
        console.log('clicked!')

    }
    randomAdjective = (e) => {
        let maxAdjective = adjectives.length
        let randomNum = Math.floor(Math.random() * Math.floor(maxAdjective))
        console.log(adjectives[randomNum])
        let adjective = adjectives[randomNum]
        return adjective
    }

    randomNoun = (e) => {
        let maxNoun = nouns.length
        let randomNum = Math.floor(Math.random() * Math.floor(maxNoun))
        console.log(nouns[randomNum])
        let noun = nouns[randomNum]
        return noun

    }
    random = (e) => {

        let maxAdjective = adjectives.length
        let adjIdx = Math.floor(Math.random() * Math.floor(maxAdjective))
        console.log(adjectives[adjIdx])
        let adjective = adjectives[adjIdx]

        let maxNoun = nouns.length
        let nounIdx = Math.floor(Math.random() * Math.floor(maxNoun))
        let noun = nouns[nounIdx]
        console.log(adjective + ' ' + noun)
        return adjective + ' ' + noun
    }


    render() {
        console.log('rendering')


        return (
            <div className="g-div" >
                <button onClick={e => { e.preventDefault(); this.handleClick(); this.random() }}>Generate</button>

            </div>

        )

    }




}

export default Generate