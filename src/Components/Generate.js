import React from 'react'
import './Generate.css'
import { adjectives, nouns } from '../words'


class Generate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            words: '',
        }



    }

    generate = (e) => {
        let maxAdjective = adjectives.length
        let maxNoun = nouns.length
        let adjIdx = Math.floor(Math.random() * Math.floor(maxAdjective))
        let nounIdx = Math.floor(Math.random() * Math.floor(maxNoun))
        console.log(adjectives[adjIdx] + ' ' + nouns[nounIdx])
        let randomWord = adjectives[adjIdx] + ' ' + nouns[nounIdx]
        return randomWord
    }


    render() {
        console.log('rendering')


        return (
            <div className="g-div" >
                <button
                    onClick={
                        e => { e.preventDefault(); this.generate(e) }
                    }>
                    Generate
                    </button>

            </div >

        )

    }




}

export default Generate