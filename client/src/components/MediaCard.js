import React from "react";

function MediaCard ({ item, handleDelete }) {

    function onDelete() {
        handleDelete(item.id)
    }
    
    return (
        <article>
            <button className="delete" onClick={onDelete}>x</button>
            <h3>{item.name}</h3>
            <img src={item.image} alt="album cover"/>
            <p>Description: {item.description}</p>
            <p>Artist: {item.artist}</p>
            <p>Record Company: {item.company}</p>
            <p>Rating: {item.rating}</p>
        </article>
    )
}

export default MediaCard