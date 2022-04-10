import React from "react";
import Formfield from "./Formfield";

export default function CreateReview() {
  return (
    <>
      <form className="app__create-box">
        <Formfield labeltitle="Review" fieldtype={Text} />
        <button className="app__create-btn">Submit</button>
      </form>
    </>
  );
}
