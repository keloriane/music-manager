import React from 'react'
import Header from './../Header/Header';

function Body({spotify}) {
    return (
        <div className="body">
           <Header spotify={spotify} />
            
        </div>
    )
}

export default Body
