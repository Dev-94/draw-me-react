import React from 'react'
import './RandomDisplay.css'

function RandomDisplay() {

    return (
        <div className="rd-div">
            <span>Adjective: {this.state.randomAdjective}</span>
            <span>Noun {this.state.randomNoun}</span>
        </div>
    )


}


// randomly selects one adjective and one noun
// two objects
// one object for adjectives
// one object for nouns
// place into an array
// state because it is dynamic, not static
// state is adjective: '', noun: ''

export default RandomDisplay