import React, { useEffect, useState } from 'react'
import SuggestionCard from './SuggestionCard'
import NavBar from './NavBar'
import '../css/HomePage.css'

function HomePage ({ filteredProducts, handleChange, handleAdd, toggle, setToggle, handleDelete }) {
    const [search, setSearch] = useState("")
    const [searchTrue, setSearchTrue] = useState(true)

    useEffect(()=> {
        setToggle(!toggle)
    }, [])

    function onChange (event) {
        handleChange(event.target.value)
    }

    function handleSearch (event) {
        let lowercase = event.target.value.toLowerCase();
        setSearch(lowercase)
        if (search.length === 0) {
            setSearchTrue(true)
        } else {
            setSearchTrue(false)
        }
    }

    const searchResults = searchTrue ? filteredProducts : filteredProducts.filter((item)=> item.name.toLowerCase().includes(search))

    return (
        <div>
            <NavBar />
            <div>
                <select className="select" onChange={onChange} name="categories">
                    <option value="all">All</option>
                    <option value="music">Music</option>
                    <option value="TV Show">TV Shows</option>
                    <option value="Movie">Movies</option>
                    <option value="Book">Books</option>
                </select>    
            </div>
            <div >
                <input className='search-bar' type={"text"} placeholder="search" value={search} onChange={handleSearch}></input>
            </div>
            <h1 className='header'>Find and keep track of your favorite music, movies, TV shows and books</h1>
            <div className='homepage-container'>
                {searchResults.map((item)=> { return (
                    <SuggestionCard key={item.name} item={item} handleAdd={handleAdd} handleDelete={handleDelete}/>
                )})}
            </div>
        </div>
    )
}

export default HomePage;