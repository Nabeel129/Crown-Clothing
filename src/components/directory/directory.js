import './directory-style.scss'
import DirectoryItem from '../category-item/directoryItem'
import React from 'react'

const Directory = (props) => {
    const { categories } = props;
    return (
        <div className="directory-container">
            {
                categories.map((category) => {
                    return (
                        <DirectoryItem key={category.id} category={category} />
                    )
                }
                )
            }
        </div>
    )
}

export default Directory; 