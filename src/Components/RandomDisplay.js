import React from 'react'
import './RandomDisplay.css'
import PropTypes from 'prop-types'

function RandomDisplay(props) {

    return (props.words === '') ? 'draw me' :

        <div className="rd-div">
            <span>
                {props.words}
            </span>
        </div>
}

export default RandomDisplay

RandomDisplay.propTypes = {
    words: PropTypes.string

}