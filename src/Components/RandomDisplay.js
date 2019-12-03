import React from 'react'
import './RandomDisplay.css'
import PropTypes from 'prop-types'

function RandomDisplay(props) {

    return (props.words === '') ? <div className="dm-div">draw me</div> :

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