import React, { Component } from 'react';
import './form.css'
import PropTypes from 'prop-types'

function AddForm (props) {
    function onInput (e) {
        props.handleInput(e.target.name, e.target.value)        
    }
    function onSubmit (e) {
        e.preventDefault()
        props.handleSubmit()
    }
    const {name, number} = props
    return(
        <form onSubmit={onSubmit}>
            <p>Name</p>
            <input autoComplete="off" autoFocus={true} name="name" value={name} onChange={(e) => onInput(e)} type="text"></input>
            <p>Number</p>
            <input autoComplete="off" name="number" value={number} onChange={(e) => onInput(e)} type="text"></input>
            <button type="submit" >Add Contact</button>
        </form>
    )
    }
export default AddForm

AddForm.propTypes = {
    onSubmit: PropTypes.func,
    onInput: PropTypes.func,
    name: PropTypes.string,
    number: PropTypes.string
}