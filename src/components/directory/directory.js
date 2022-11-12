import { DirectoryContainer } from './directory-style.js'
import DirectoryItem from '../category-item/directoryItem'
import React from 'react'
import Categories from '../../categories'

const Directory = () => {
    return (
        <DirectoryContainer>
            {
                Categories.map((category) => {
                    return (
                        <DirectoryItem key={category.id} category={category} />
                    )
                }
                )
            }
        </DirectoryContainer>
    )
}

export default Directory; 