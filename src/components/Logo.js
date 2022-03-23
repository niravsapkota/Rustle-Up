import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <>
      <Link style={{ color: "inherit", textDecoration: "inherit" }} to="/">
        <span className="app__header-logo">
          Rustle<span className="app__header-logopart">Up</span>
        </span>
      </Link>
    </>
  );
}
