import React, { useEffect } from 'react'
import SuggestionCard from './SuggestionCard'
import NavBar from './NavBar'
import '../css/HomePage.css'

function HomePage ({ items, handleAdd, toggle, setToggle, handleDelete }) {

    useEffect(()=> {
        setToggle(!toggle)
    }, [])

    return (
        <div>
            <NavBar />
            <h1 className='header'>Find and keep track of your favorite music, movies and TV shows, add and change your ratings</h1>
            <div className='homepage-container'>
                {items.map((item)=> { return (
                    <SuggestionCard key={item.name} item={item} handleAdd={handleAdd} handleDelete={handleDelete}/>
                )})}
            </div>
        </div>
    )
}

export default HomePage;