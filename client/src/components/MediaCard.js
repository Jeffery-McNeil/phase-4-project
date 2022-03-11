import React from "react";

function MediaCard ({ item, handleDelete }) {
    function onDelete() {
        handleDelete(item.id)
    }

    function handleClick (e) {
        localStorage.setItem('ItemInfo', `${item.id}`)
        window.location.href = 'ItemInfo'
        }

    return (
        <article>
            <button className="delete" onClick={onDelete}>x</button>
            <h3>{item.name}</h3>
            <img src={item.image} alt="cover art"/>
            <p>Creator: {item.artist}</p>
            <button onClick={handleClick}>More Info</button>
        </article>
    )
}

export default MediaCard