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
  const [exists, setExists] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputName = document.querySelector("#inputName");
    const inputEmail = document.querySelector("#inputEmail");
    let emailExists = false;

    const emailValidation =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const nameValidation = /^[a-z ,.'-]+$/i;
    if (email.match(emailValidation) && name.match(nameValidation)) {
      if (contact !== undefined) {
        contact.forEach((user) => {
          if (user.userEmail === email) {
            setExists(true);
            emailExists = true;
            inputName.classList.add("inputError");
            inputEmail.classList.add("inputError");
          }
        });
      }
      if (!emailExists) {
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
        setExists(false);
        setTimeout(() => {
          setSuccess(false);
        }, 500);

        if (inputName.classList.contains("inputError")) {
          inputName.classList.remove("inputError");
          inputEmail.classList.remove("inputError");
        }
      }
    } else {
      setError(true);
      inputName.classList.add("inputError");
      inputEmail.classList.add("inputError");
    }
    // if (email.match(emailValidation) && name.match(nameValidation) && !exists) {
    //   const newUser = {
    //     img: "https://www.sketchappsources.com/resources/source-image/profile-illustration-gunaldi-yunus.png",
    //     userName: name,
    //     userEmail: email,
    //     id: uuidv4(),
    //   };
    //   const newContacts = newUser;
    //   setContact([...contact, newContacts]);
    //   console.log(contact);
    //   setName("");
    //   setEmail("");
    //   setError(false);
    //   setSuccess(true);
    //   setTimeout(() => {
    //     setSuccess(false);
    //   }, 500);

    //   if (inputName.classList.contains("inputError")) {
    //     inputName.classList.remove("inputError");
    //     inputEmail.classList.remove("inputError");
    //   }
    // } else {
    //   setError(true);
    //   inputName.classList.add("inputError");
    //   inputEmail.classList.add("inputError");
    // }
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
                setSuccess={setSuccess}
                setError={setError}
                exists={exists}
                setExists={setExists}
                contact={contact}
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
