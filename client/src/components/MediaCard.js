import React from "react";
import '../css/MediaCard.css'

function MediaCard ({ item, handleDelete }) {
    function onDelete() {
        handleDelete(item.id)
    }

    function handleClick (e) {
        localStorage.setItem('ItemInfo', `${item.id}`)
        window.location.href = 'ItemInfo'
    }

    return (
        <article className="card">
            <button className="delete-button" onClick={onDelete}>x</button>
            <h3 className="name">{item.name}</h3>
            <img className="image" src={item.image} alt="cover art"/>
            <button className="card-button" onClick={handleClick}>More Info</button>
        </article>
    )
}

export default MediaCard