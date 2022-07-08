import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AddPage({
  name,
  email,
  setName,
  setEmail,
  handleSubmit,
  error,
  setError,
}) {
  function crearItem() {
    return (
      <div className="w-80 bg-red-400 flex flex-col mx-auto p-3 rounded shadow-sm text-center my-5">
        The data provided is not correct
      </div>
    );
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
            <Link
              to="/"
              className="bg-blue-500 text-white font-medium py-2 px-3 text-sm rounded"
            >
              Back to Contact List
            </Link>
          </div>
        </form>
      </div>
      {error ? crearItem() : ""}
    </>
  );
}
