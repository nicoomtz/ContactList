import React from "react";
import { useParams } from "react-router-dom";

export default function UserPage({ contact }) {
  const { id } = useParams();

  const contacto = contact.filter((user) => user.id === id);
  const { userName, userEmail } = contacto[0];

  return (
    <div>
      <div className="flex w-80 flex-col bg-slate-50 mx-auto shadow-lg">
        <img
          src="https://www.sketchappsources.com/resources/source-image/profile-illustration-gunaldi-yunus.png"
          alt="profile"
        />
        <div className="p-2 px-4">
          <h3 className="font-medium text-xl">{userName}</h3>
          <p className="">{userEmail}</p>
        </div>
      </div>
    </div>
  );
}
