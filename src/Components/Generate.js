import React from 'react'
import './Generate.css'


function Generate() {
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






export default Generate