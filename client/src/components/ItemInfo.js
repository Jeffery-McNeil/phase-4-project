import React, { useEffect, useState } from 'react';

function ItemInfo ({ handleDelete }) {
    const [item, setItem] = useState([])
    const [rating, setRating] = useState("")
    const [toggle, setToggle] = useState(true)

    useEffect(()=> {
        fetch(`/media/${localStorage.ItemInfo}`)
            .then((r) => r.json())
            .then((data) => {
                setItem(data)
                setRating(data.rating)
            })
    }, [toggle]);

    function onDelete() {
        handleDelete(item.id)
    }

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
                setToggle(!toggle)
            })          
    }

    console.log(item)

    switch (item.category) {        
    case 'Movie':
        return (
            <article>
                <button className="delete" onClick={onDelete}>x</button>
                <h3>{item.name}</h3>
                <img src={item.image} alt="album cover"/>
                <p>Description: {item.description}</p>
                <p>Artist: {item.artist}</p>
                <p>Record Company: {item.company}</p>
                <p>Rating: {item.rating}</p>
                <button onClick={handleClick} value={true}>+</button>
                <button onClick={handleClick} value={null}>-</button>
            </article> )
    case 'TV show':
        return (    
            <article>
                <button className="delete" onClick={onDelete}>x</button>
                <h3>{item.name}</h3>
                <img src={item.image} alt="album cover"/>
                <p>Description: {item.description}</p>
                <p>Artist: {item.artist}</p>
                <p>Record Company: {item.company}</p>
                <p>Rating: {item.rating}</p>
                <button onClick={handleClick} value={true}>+</button>
                <button onClick={handleClick} value={null}>-</button>
            </article>)
    default: 
        return (
            <article>
                <button className="delete" onClick={onDelete}>x</button>
                <h3>{item.name}</h3>
                <img src={item.image} alt="album cover"/>
                <p>Description: {item.description}</p>
                <p>Artist: {item.artist}</p>
                <p>Record Company: {item.company}</p>
                <p>Rating: {item.rating}</p>
                <button onClick={handleClick} value={true}>+</button>
                <button onClick={handleClick} value={null}>-</button>
            </article> )
    }}

export default ItemInfo; 