import React from 'react'
import './directory-item.style.scss'

const DirectoryItem = (props) => {
    const { title, imageUrl } = props.category;
    return (
        < div className="directoryItem-container" >
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="directory-body-container">
                <h2>{title.toUpperCase()}</h2>
                <p>Shop Now!</p>
            </div>
        </div>

    )
}

export default DirectoryItem;