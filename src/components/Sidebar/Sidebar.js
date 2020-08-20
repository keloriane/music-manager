import React from 'react'
import SideBarOption from './SideBarOption'
import { useDataLayerValue } from './../../DataLayer'

export default function SideBar() {

    const [{playlists, user}, dispatch] = useDataLayerValue();

    console.log(playlists);
    console.log(user);
    return (
            <div className="sidebar">
                <div className="title-container">
                <h3>Playlist</h3>
                </div>
            <div className="body-content">
                {playlists?.items?.map((playlist) =>(
                    <div className="playlist">
                        <p>{playlist.name}</p>
                        <img src={playlist?.images[1]?.url} alt=""/>
                    </div>
                ))
            }
            </div>
            </div>
           
    )
}
