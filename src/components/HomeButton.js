import React from "react";
import { Link } from "react-router-dom";

export default function HomeButton() {
  return (
    <Link
      to="/"
      className="bg-blue-500 text-white font-medium py-2 px-3 text-sm rounded"
    >
      Back to Contact List
    </Link>
  );
}
