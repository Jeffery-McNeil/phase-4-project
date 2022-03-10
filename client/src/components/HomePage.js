import React, { useEffect } from 'react'
import SuggestionCard from './SuggestionCard'
import NavBar from './NavBar'

function HomePage ({ items, handleAdd, toggle, setToggle, handleDelete }) {

    useEffect(()=> {
        setToggle(!toggle)
    }, [])

    return (
        <div>
            <NavBar></NavBar>
            <header>Your Mom</header>
            <article>Service Explanation</article>
            {items.map((item)=> { return (
                <SuggestionCard key={item.name} item={item} handleAdd={handleAdd} handleDelete={handleDelete}/>
            )})}
        </div>
    )
}

export default HomePage;