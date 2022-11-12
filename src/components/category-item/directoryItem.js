import React from 'react'
import { DirectoryItemContainer, BackgroundImage, DirectoryBodyContainer } from './directory-item.style.js'
import { useNavigate } from 'react-router-dom';

const DirectoryItem = (props) => {
    const { title, imageUrl, route } = props.category;
    const navigate = useNavigate();
    const categoryHandler = () => { navigate(route); }
    return (
        < DirectoryItemContainer onClick={categoryHandler}>
            <BackgroundImage imageUrl={imageUrl} />
            <DirectoryBodyContainer>
                <h2>{title.toUpperCase()}</h2>
                <p>Shop Now!</p>
            </DirectoryBodyContainer>
        </DirectoryItemContainer>

    )
}

export default DirectoryItem;