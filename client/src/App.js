import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MediaList from './components/MediaList';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/media")
      .then((r) => r.json())
      .then((data) => setItems(data));
  }, []);

  function handleDelete(id) {
    fetch(`/media/${id}`, { method: "DELETE" })
    const itemsToDisplay = items.filter((item) => item.id !== id)
    setItems(itemsToDisplay)
  }

  function handleSubmit (event, newItem) {
    event.preventDefault();
    fetch("/media", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newItem)
    }).then((response) => response.json())
    .then((data)=> {
      const itemsToDisplay = {...items, data}
      console.log(itemsToDisplay)
    });
  }

  console.log(items)

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/medialist">
            <MediaList items={items} handleDelete={handleDelete} handleSubmit={handleSubmit}/>
          </Route>
          <Route path="/homepage">
          </Route>
          <Route path="/">
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  ); 
}

export default App;
