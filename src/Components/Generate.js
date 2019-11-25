import React from 'react'
import './Generate.css'

class Generate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasBeenClicked: false
        }
    }

    handleClick = () => {
        this.setState({
            hasBeenClicked: true
        })
        console.log('clicked!')

    }


    render() {

        return (
            <div className="g-div" >
                <button onClick={e => { e.preventDefault(); this.handleClick() }}>Generate</button>

            </div>

        )

    }




}

export default Generate