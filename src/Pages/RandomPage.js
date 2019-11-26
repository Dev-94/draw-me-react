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
    // no passing info in, not firing off
    updateState = (randomWords) => {
        console.log(randomWords)
        this.setState({
            words: randomWords
        })
    }




    render() {
        return (
            <div>
                <RandomDisplay
                    words={this.state.words}
                />
                <Generate
                    clicked={this.updateState}

                />
            </div >

        )

    }


}

export default RandomPage