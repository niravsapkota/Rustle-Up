import React from "react"
import PropTypes from "prop-types"

export default function FormField(props) {
    return (
        <div className="app__form-field">

            <label className='app__name-label' htmlFor='name'>{props.labeltitle}</label>
            <input id='app__name-input' type={props.fieldtype}></input>

        </div>

    )

}

FormField.propTypes = {

    labeltitle:PropTypes.string.isRequired

};


FormField.defaultProps = {

    labeltitle:"Error"

}

