import React from 'react'
import './Generate.css'
import { adjectives, nouns } from '../words'
import PropTypes from 'prop-types'


function Generate(props) {
    console.log('Gprops is ' + props)

    function generateWord(e) {
        console.log('e is ' + e)
        let maxAdjective = adjectives.length
        let maxNoun = nouns.length
        let adjIdx = Math.floor(Math.random() * Math.floor(maxAdjective))
        let nounIdx = Math.floor(Math.random() * Math.floor(maxNoun))
        console.log(adjectives[adjIdx] + ' ' + nouns[nounIdx])
        let randomWord = adjectives[adjIdx] + ' ' + nouns[nounIdx]
        // this.updateState(randomWord)
        props.clicked(e.target.value)

    }
    return (
        <div className="g-div" >
            <button
                onClick={
                    e => { e.preventDefault(); generateWord(e) }
                }>
                Generate
                    </button>
        </div >

    )

}






export default Generate


Generate.propTypes = {
    words: PropTypes.string

}