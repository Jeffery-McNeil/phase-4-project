import React, { useEffect, useState } from 'react';
import '../css/ItemInfo.css'

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
        window.location.href = 'homepage'
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

    console.log(item.category)

    switch (item.category) {        
    case 'music':
        return (
            <article className='info-card'>
                <button className="info-delete" onClick={onDelete}>x</button>
                <h3 className='info-name'>{item.name}</h3>
                <img className='info-image' src={item.image} alt="album cover"/>
                <div className='info-details'>
                    <p className='info-description'>Description: {item.description}</p>
                    <p className='info-creator'>Artist: {item.artist}</p>
                    <p className='info-company'>Record Company: {item.company}</p>
                    <p className='info-rating'>Rating: {item.rating}</p>
                    <button className='info-button-left' onClick={handleClick} value={null}>-</button>
                    <button className='info-button-right' onClick={handleClick} value={true}>+</button>
                </div>
            </article>)
    case 'Book':
        return (    
            <article className='info-card'>
                <button className="info-delete" onClick={onDelete}>x</button>
                <h3 className='info-name'>{item.name}</h3>
                <img className='info-image' src={item.image} alt="album cover"/>
                <div className='info-details'>
                    <p className='info-description'>Description: {item.description}</p>
                    <p className='info-creator'>Author: {item.artist}</p>
                    <p className='info-company'>Publishing Company: {item.company}</p>
                    <p className='info-rating'>Rating: {item.rating}</p>
                    <button className='info-button-left' onClick={handleClick} value={true}>-</button>
                    <button className='info-button-right' onClick={handleClick} value={null}>+</button>
                </div>
            </article>)
    default: 
        return (    
            <article className='info-card'>
                <button className="info-delete" onClick={onDelete}>x</button>
                <h3 className='info-name'>{item.name}</h3>
                <img className='info-image' src={item.image} alt="album cover"/>
                <div className='info-details'>
                    <p className='info-description'>Description: {item.description}</p>
                    <p className='info-creator'>Director: {item.artist}</p>
                    <p className='info-company'>Production Company: {item.company}</p>
                    <p className='info-rating'>Rating: {item.rating}</p>
                    <button className='info-button-left' onClick={handleClick} value={null}>-</button>
                    <button className='info-button-right' onClick={handleClick} value={true}>+</button>
                </div>
            </article>)
    }}

export default ItemInfo; 