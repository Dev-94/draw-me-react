import React from 'react'
import './RandomDisplay.css'

class RandomDisplay extends React.Component {
    render() {
        return (this.props.words == '') ? 'draw me' :
            <div className="rd-div">
                <span>
                    {this.props.words}
                </span>
            </div>
    }
}

export default RandomDisplay