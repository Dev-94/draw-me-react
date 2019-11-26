import React from 'react'
import './RandomDisplay.css'
import PropTypes from 'prop-types'

function RandomDisplay(props) {
    return (this.props.words === '') ? 'draw me' :
        <div className="rd-div">
            <span>
                {/* may be need to bind props with new state */}
                {this.props.words}
            </span>
        </div>
}

export default RandomDisplay

RandomDisplay.propTypes = {
    words: PropTypes.string

}