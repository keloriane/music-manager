import React from 'react'

function SideBarOption({title, Icon}) {
    return (
        <div>
           <i>{Icon}</i><p>{title}</p> 
        </div>
    )
}

export default SideBarOption
