import React from 'react'
import RandomDisplay from '../Components/RandomDisplay'
import Generate from '../Components/Generate'
import { adjectives, nouns } from '../words'

class RandomPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            adjective: '',
            noun: ''
        }

        // creates random adjectives and nouns
        // setState to returns
        // set 'Generate' button to roll dice
        let randomAdjective = () => {
            let max = adjectives.length
            let randomNum = Math.floor(Math.random() * Math.floor(max))
            console.log(adjectives[randomNum])
        }
        randomAdjective()

        let randomNoun = () => {
            let max = nouns.length
            let randomNum = Math.floor(Math.random() * Math.floor(max))
            console.log(nouns[randomNum])
        }
        randomNoun()





        function generate() {
            this.setState({
                adjective: randomAdjective(),
                noun: randomNoun()
            })

        }
    }





    render() {

        return (
            <div>

                <RandomDisplay randomAdjective={this.state.randomAdjective} randomNoun={this.state.randomNoun} />
                <Generate />
            </div >

        )

    }


}

export default RandomPage