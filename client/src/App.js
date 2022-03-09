import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MediaList from './components/MediaList';
import Login from './components/Login';
import SignUp from './components/SignUp';
import HomePage from './components/HomePage'

function App() {
  const [items, setItems] = useState([]);
  const [toggle, setToggle] = useState(true)
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/media")
      .then((r) => r.json())
      .then((data) => setItems(data));
  }, [ toggle ]);

  function handleAdd (id) {
    fetch("/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: localStorage.user,
        medium_id: id
      })
    }).then((response)=> response.json())
    .then((data)=> {
      console.log(data)
      let itemsToDisplay = items.filter((item)=> item.id !== data)
      console.log(itemsToDisplay)
      setItems(itemsToDisplay)
    })
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/medialist">
            <MediaList />
          </Route>
          <Route path="/homepage">
            <HomePage items={items} handleAdd={handleAdd} toggle={toggle} setToggle={setToggle} />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  ); 
}

export default App;
