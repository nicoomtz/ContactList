import { useNavigate } from "react-router";
import { useEffect } from "react";
import HomeButton from "../components/HomeButton";

export default function AddPage({
  name,
  email,
  setName,
  setEmail,
  handleSubmit,
  error,
  success,
  exists,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    if (success) {
      navigate("/");
    }
  }, [success]);

  function renderItem(item) {
    if (item === "error") {
      return (
        <div
          id="errorDiv"
          className="w-80 bg-red-400 flex flex-col mx-auto p-3 rounded shadow-sm text-center my-5"
        >
          The data provided is not correct
        </div>
      );
    }
    if (item === "email") {
      return (
        <div
          id="errorDiv"
          className="w-80 bg-red-400 flex flex-col mx-auto p-3 rounded shadow-sm text-center my-5"
        >
          The email is already scheduled
        </div>
      );
    }
  }

  return (
    <>
      <div
        id="container"
        className="w-80 div-container flex flex-col mx-auto p-3 rounded shadow-lg"
      >
        <form onSubmit={handleSubmit}>
          <label htmlFor="inputName" className="font-medium">
            Name
          </label>
          <br />
          <input
            type="text"
            id="inputName"
            className="border px-2 rounded outline-none my-2 w-full"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <br />
          <label htmlFor="inputEmail" className="font-medium">
            Email
          </label>
          <br />
          <input
            type="text"
            id="inputEmail"
            className="border px-2 rounded outline-none my-2 w-full"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <br />
          <div className="flex justify-between">
            <button className="bg-blue-500 text-white font-medium py-2 px-3 text-sm rounded">
              Add
            </button>
            <HomeButton />
          </div>
        </form>
      </div>
      {error ? renderItem("error") : ""}
      {exists ? renderItem("email") : ""}
    </>
  );
}
