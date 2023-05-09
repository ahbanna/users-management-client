import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);
  };

  return (
    <>
      <h1>Users management </h1>
      <h2>Numbers of users:{users.length}</h2>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" placeholder="Enter Name" />
        <br />
        <input type="email" name="email" id="" placeholder="Enter Email" />
        <br />
        <input type="submit" value="Add user" />
      </form>
      <div>
        {users.map((user) => (
          <p key={user.id}>
            {user.id} : {user.name} : {user.email}
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
