import React from 'react'
import RandomDisplay from '../Components/RandomDisplay'
import Generate from '../Components/Generate'

class RandomPage extends React.Component {
    state = {
        words: '',
    }

    updateState = (randomWord) => {
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