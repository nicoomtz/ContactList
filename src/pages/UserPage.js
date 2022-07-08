import React from "react";
import { useParams, Link } from "react-router-dom";

export default function UserPage({ contact }) {
  const { id } = useParams();

  const contacto = contact.filter((user) => user.id === id);

  return (
    <div className="flex flex-col w-80 mx-auto">
      <div className="flex w-80 flex-col div-container mx-auto shadow-lg">
        <img
          src="https://www.sketchappsources.com/resources/source-image/profile-illustration-gunaldi-yunus.png"
          alt="profile"
        />
        <div className="p-2 px-4">
          <h3 className="font-medium text-xl">{contacto[0].userName}</h3>
          <p className="text-gray-500">{contacto[0].userEmail}</p>
        </div>
      </div>
      <Link
        to="/"
        className="bg-blue-500 text-white font-medium py-2 px-3 text-sm"
      >
        Back to Contact List
      </Link>
    </div>
  );
}
