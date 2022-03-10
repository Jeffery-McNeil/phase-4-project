import React, { useEffect, useState } from "react"
import MediaCard from './MediaCard'
import NavBar from './NavBar'

function MediaList () {
    const [userItems, setUserItems] = useState([])
    const [errors, setErrors] = useState("")
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        description: "",
        artist: "",
        company: "",
        rating: ""
    })

    useEffect(() => {
        fetch(`/user_media/${localStorage.user}`)
          .then((r) => r.json())
          .then((data) => setUserItems(data));
      }, []);

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
    }

    function handleDelete(id) {
        fetch(`/categories/${id}`, { method: "DELETE" })
        const itemsToDisplay = userItems.filter((item) => item.id !== id)
        setUserItems(itemsToDisplay)
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
        <div>
            <NavBar />
            {userItems.map((item)=> {
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
            <h1>{errors}</h1>
        </div>
    )

}

export default MediaList;