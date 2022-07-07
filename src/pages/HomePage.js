import { Link } from "react-router-dom";
import User from "../components/User";

export default function HomePage({ contact, setContact }) {
  console.log(contact);

  function handleClick(e) {
    const newContactList = contact.filter((user) => user.id !== e.target.id);

    setContact(newContactList);
  }

  return (
    <div className="flex flex-col justify-center align-center max-w-sm mx-auto text-center min-h-full">
      <div className="flex p-2 justify-between bg-white max-w-sm rounded items-center shadow-lg bg-slate-50">
        <h2 className="font-medium">Contact List</h2>
        <Link
          to="/add"
          className="bg-blue-500 text-white font-medium p-2 text-sm rounded"
        >
          Add new contact
        </Link>
      </div>
      <div className="">
        {contact.map((user) => {
          return (
            <User
              contact={user}
              key={user.id}
              userId={user.id}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    </div>
  );
}
