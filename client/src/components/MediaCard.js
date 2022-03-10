import React, { useEffect, useState } from "react";

function MediaCard ({ item, handleDelete }) {
    const [rating, setRating] = useState(0)

    function onDelete() {
        handleDelete(item.id)
    }

    useEffect(()=> {
        fetch(`/media/${item.id}`)
            .then((r) => r.json())
            .then((data) => {
                setRating(data.rating)
            })
    }, [])

    function handleClick (event) {
        const expression = event.target.value ? rating + 1 : rating - 1

        fetch(`/media/${item.id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                rating: expression
            })
        })  
            .then((response)=> response.json())
            .then((data)=> {
                setRating(data.rating)
            })          
    }
    
    return (
        <article>
            <button className="delete" onClick={onDelete}>x</button>
            <h3>{item.name}</h3>
            <img src={item.image} alt="album cover"/>
            <p>Description: {item.description}</p>
            <p>Artist: {item.artist}</p>
            <p>Record Company: {item.company}</p>
            <p>Rating: {rating}</p>
            <button onClick={handleClick} value={true}>+</button>
            <button onClick={handleClick} value={null}>-</button>
        </article>
    )
}

export default MediaCard