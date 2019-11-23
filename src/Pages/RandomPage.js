import React from 'react'
import RandomDisplay from '../Components/RandomDisplay'
import Generate from '../Components/Generate'

function RandomPage() {

    return (
        <div>
            <RandomDisplay randomAdjective={this.props.randomAdjective} randomNoun={this.props.randomNoun} />
            <Generate />
        </div>

    )


}

export default RandomPage