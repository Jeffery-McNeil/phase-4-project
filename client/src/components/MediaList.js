import React, { useState } from "react"
import MediaCard from './MediaCard'
import NavBar from './NavBar'

function MediaList ({ items, handleSubmit, handleDelete }) {
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        description: "",
        artist: "",
        company: "",
        rating: ""
    })

    function onSubmit (event) {
        handleSubmit(event, formData )
    }

    function handleChange (event) {
        const name = event.target.name;
        let value = event.target.value;
        setFormData({
            ...formData,
            [name]: value,
        });
        console.log(formData)
    }

    return (
        <div>
            <NavBar/>
            {items.map((item)=> {
                return (
                <MediaCard key={item.name} item={item} handleDelete={handleDelete}/>
            )})}
            <form onSubmit={onSubmit}>
                <h1>Add your favorites!</h1>
                <input type={"text"} name="name" placeholder="name" value={formData.name} onChange={handleChange}></input>
                <input type={"text"} name="image" placeholder="image" value={formData.image} onChange={handleChange}></input>
                <input type={"text"} name="description" placeholder="description" value={formData.description} onChange={handleChange}></input>
                <input type={"text"} name="artist" placeholder="artist" value={formData.artist} onChange={handleChange}></input>
                <input type={"text"} name="company" placeholder="company" value={formData.company} onChange={handleChange}></input>
                <input type={"text"} name="rating" placeholder="rating 1-10" value={formData.rating} onChange={handleChange}></input>
                <input type={"submit"}></input>
            </form>
        </div>
    )

}

export default MediaList;