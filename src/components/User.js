import React from "react";
import { Link, useParams } from "react-router-dom";

export default function User({ contact, handleClick, userId }) {
  const { id } = useParams;

  return (
    <div
      id={id}
      key={id}
      className="home-user flex justify-between my-5 items-center py-1 px-4 shadow"
    >
      <Link to={`/user/${contact.id}`} className="flex flex-row">
        <img
          src="https://cdn.icon-icons.com/icons2/2556/PNG/512/profile_picture_user_icon_153075.png"
          alt="icon"
          className="home-icon-user w-11 rounded-full"
        />
        <div className="flex flex-col ml-3 text-justify">
          <h3 className="font-medium">{contact.userName}</h3>
          <p>{contact.userEmail}</p>
        </div>
      </Link>
      <button onClick={handleClick}>
        <i className="fa-solid fa-trash-can text-blue-500" id={userId}></i>
      </button>
    </div>
  );
}
