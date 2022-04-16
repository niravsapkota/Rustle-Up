import React from "react";

export function FormField(props) {
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
        placeholder={props.phvalue}
        required
      ></input>
    </div>
  );
}

export default FormField;
/*
export function DropdownMenu(props) {
  return (
    <div className="app__form-field">
      <label className="app__name-label" htmlFor="name">
        {props.labeltitle}
      </label>
      <select
        id="app__name-input"
        name={props.name}
        type={props.fieldtype}
        onChange={props.onChange}
        required
      ></select>
    </div>
  );
}*/