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
    async updateState(e) {
        var randomWords = this.props.words
        console.log('state is being updated')
        await this.setState({
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
                    generate={this.updateState}
                />
            </div >

        )

    }


}

export default RandomPage