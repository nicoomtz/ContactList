import "./App.css";
import "./input.css";
import { useEffect, useState } from "react";
import {
  Route,
  Routes,
  BrowserRouter,
  NavLink,
  useNavigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import UserPage from "./pages/UserPage";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [contact, setContact] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailValidation =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(emailValidation)) {
      console.log("El mail es valido");
      const newUser = {
        img: "https://www.sketchappsources.com/resources/source-image/profile-illustration-gunaldi-yunus.png",
        userName: name,
        userEmail: email,
        id: uuidv4(),
      };
      const newContacts = newUser;
      setContact([...contact, newContacts]);
      console.log(contact);
      setName("");
      setEmail("");
      setError(false);
      setSuccess(true);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <BrowserRouter>
        <NavLink
          to="/"
          className="flex text-xl font-medium p-3 w-full justify-center bg-blue-400 mb-5 mx-auto"
        >
          Contact Manager
        </NavLink>
        <Routes>
          <Route
            path="/"
            element={<HomePage contact={contact} setContact={setContact} />}
          />
          <Route
            path="/add"
            element={
              <AddPage
                name={name}
                email={email}
                success={success}
                error={error}
                handleSubmit={handleSubmit}
                setName={setName}
                setEmail={setEmail}
                setError={setError}
                setSuccess={setSuccess}
              />
            }
          />
          <Route path="/user/:id" element={<UserPage contact={contact} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
