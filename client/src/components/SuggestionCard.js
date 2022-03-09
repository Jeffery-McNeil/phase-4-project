

function SuggestionCard ({ item, handleAdd }) {
    
    function handleClick () {
        handleAdd(item.id)
    }

    return (
        <article>
            <h3>{item.name}</h3>
            <img src={item.image} alt="album cover"/>
            <p>Description: {item.description}</p>
            <p>Artist: {item.artist}</p>
            <p>Record Company: {item.company}</p>
            <p>Rating: {item.rating}</p>
            <button onClick={handleClick}>Add to List</button>
        </article>
    )
}

export default SuggestionCard