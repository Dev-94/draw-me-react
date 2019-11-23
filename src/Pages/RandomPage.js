import React from 'react'
import RandomDisplay from '../Components/RandomDisplay'
import Generate from '../Components/Generate'

class RandomPage extends React.Component {
    render() {

        return (
            <div>
                <RandomDisplay randomAdjective={this.props.randomAdjective} randomNoun={this.props.randomNoun} />
                <Generate />
            </div >

        )

    }


}

export default RandomPage