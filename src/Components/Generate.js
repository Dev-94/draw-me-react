import React from 'react'
import './Generate.css'
import { adjectives, nouns } from '../words'
import PropTypes from 'prop-types'

function Generate(props) {

    function buttonClicked(e) {
        let maxAdjective = adjectives.length
        let maxNoun = nouns.length
        let adjIdx = Math.floor(Math.random() * Math.floor(maxAdjective))
        let nounIdx = Math.floor(Math.random() * Math.floor(maxNoun))
        let randomWord = adjectives[adjIdx] + ' ' + nouns[nounIdx]
        props.clicked(randomWord)

    }
    return (
        <div className="g-div" >
            <button
                onClick={buttonClicked}
            >
                Generate
                    </button>
        </div >

    )

}






export default Generate


Generate.propTypes = {
    words: PropTypes.string

}