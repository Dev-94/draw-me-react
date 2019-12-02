import React from 'react'
import RandomDisplay from '../Components/RandomDisplay'
import Generate from '../Components/Generate'
import { adjectives, nouns } from '../words'

class RandomPage extends React.Component {

    state = {
        words: '',
    }


    // update state with words generated
    // ************ no passing info in, not firing off
    updateState = (randomWord) => {
        console.log('RP is ' + randomWord)
        this.setState({
            words: randomWord
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
                    randomWord={this.state.words}

                />
            </div >

        )

    }

}


export default RandomPage