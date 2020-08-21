import React from 'react'
import { useDataLayerValue } from '../../DataLayer'

function Header() {
    const [{user, playlist}, dispatch] = useDataLayerValue();
    console.log(playlist);
    return (
        <div className="header-container">
        <img src={ user?.images[0]?.url } alt={user?.display_name}/>
        <h4> {user?.display_name} </h4>
        </div>
    )
}

export default Header