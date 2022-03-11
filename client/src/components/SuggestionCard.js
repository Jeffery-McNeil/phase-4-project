

function SuggestionCard ({ item, handleAdd, handleDelete }) {
    
    function handleClick () {
        handleAdd(item.id)
    }

    function onDelete () {
        handleDelete(item.id)
    }

    function onClick (e) {
        localStorage.setItem('ItemInfo', `${item.id}`)
        window.location.href = 'ItemInfo'
    }

    return (
        <article className="card">
            <button className="delete-button" onClick={onDelete}>x</button>
            <h3 className="name" >{item.name}</h3>
            <img className="image" src={item.image} alt="album cover"/>
            <div className="button-container">
                <button className="card-button-left" onClick={handleClick}>Add to List</button>
                <button className="card-button-right" onClick={onClick}>More Info</button>
            </div>
        </article>
    )
}

export default SuggestionCard