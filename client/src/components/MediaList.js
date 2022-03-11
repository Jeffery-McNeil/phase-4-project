import React, { useEffect, useState } from "react"
import MediaCard from './MediaCard'
import NavBar from './NavBar'
import '../css/MediaList.css'

function MediaList () {
    const [userItems, setUserItems] = useState([])
    const [errors, setErrors] = useState("")
    const [filteredProducts, setFilteredProducts] = useState(userItems)
    const [search, setSearch] = useState("")
    const [searchTrue, setSearchTrue] = useState(true)
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        description: "",
        artist: "",
        company: "",
        category: "",
        rating: ""
    })

    useEffect(() => {
        fetch(`/user_media/${localStorage.user}`)
          .then((r) => r.json())
          .then((data) => {
              setUserItems(data)
              setFilteredProducts(data)
          });
      }, []);

    function onSubmit (event) {
        handleSubmit(event, formData)
    }

    function handleChange (event) {
        const name = event.target.name;
        let value = event.target.value;
        setFormData({
            ...formData,
            [name]: value,
        });
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

    const searchResults = filteredProducts.filter((item)=> item.name.toLowerCase().includes(search))
    
    
    function onChange(event) {
        let category = event.target.value
        if (category === "all") {
            setFilteredProducts(userItems)
        } else {
        const itemsToDisplay = userItems.filter((item) => item.category === event.target.value)
        setFilteredProducts(itemsToDisplay)
        }
    }

    function handleDelete(id) {
        fetch(`/categories/${id}`, { method: "DELETE" })
        const itemsToDisplay = userItems.filter((item) => item.id !== id)
        setFilteredProducts(itemsToDisplay)
    }
    
    function handleSubmit (event, newItem) {
    event.preventDefault();
    fetch(`/media`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newItem)
    }).then((response) => response.json())
    .then((data)=> {
        if (data.errors) {
            setErrors(data.errors)
        }
        else {
            setUserItems([...userItems, data])
        }})
    }

    return (
        <>
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
                <input className="search-bar" type={"text"} placeholder="search" value={search} onChange={handleSearch}></input>
            </div>
            <div className="medialist-container">
                {searchResults.map((item)=> {
                    return (
                    <MediaCard key={item.name} item={item} handleDelete={handleDelete}/>
                )})}
            </div>
            <div className="submit-form">
                <form onSubmit={onSubmit}>
                    <h1>Add your favorites!</h1>
                    <input type={"text"} name="name" placeholder="name" value={formData.name} onChange={handleChange}></input>
                    <input type={"text"} name="image" placeholder="image" value={formData.image} onChange={handleChange}></input>
                    <input type={"text"} name="description" placeholder="description" value={formData.description} onChange={handleChange}></input>
                    <input type={"text"} name="artist" placeholder="creator" value={formData.artist} onChange={handleChange}></input>
                    <input type={"text"} name="company" placeholder="company" value={formData.company} onChange={handleChange}></input>
                    <input type={"text"} name="category" placeholder="category" value={formData.category} onChange={handleChange}></input>
                    <input type={"text"} name="rating" placeholder="rating 1-10" value={formData.rating} onChange={handleChange}></input>
                    <input type={"submit"}></input>
                </form>
            </div>
            <h1>{errors}</h1>            
        </>
    )

}

export default MediaList;