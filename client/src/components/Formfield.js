import React from "react"

export default function (props) {
    return (
        <div className="app__form-field">

            <label className='app__name-label' htmlFor='name'>{props.labeltitle}</label>
            <input id='app__name-input' type={props.fieldtype}></input>

        </div>

    )

}