import React from "react";

export default function FormField(props) {
  return (
    <div className="app__form-field">
      <label className="app__name-label" htmlFor="name">
        {props.labeltitle}
      </label>
      <input
        id="app__name-input"
        name={props.name}
        type={props.fieldtype}
        onChange={props.onChange}
        accept={props.accept}
        placeholder={props.phvalue}
        value={props.value}
        required
      ></input>
    </div>
  );
}
