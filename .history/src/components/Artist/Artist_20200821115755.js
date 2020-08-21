import React from 'react'

function Artist() {
    let url = window.location.pathname.split('/');
    let id = url[2]

    console.log(id)

    return (
        <div className="artist">
            
        </div>
    )
}

export default Artist
