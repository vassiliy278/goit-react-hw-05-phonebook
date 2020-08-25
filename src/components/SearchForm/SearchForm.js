import React, { Component } from 'react';
import './search.css'
import PropTypes from 'prop-types'

function Search ({onSearch}) {

    function searchByFilter (e) {
        onSearch(e.target.value)
    }
        return(
            <form>
                <p>Search</p>
                <input autoComplete="off" type="text" onInput={(e) => searchByFilter(e)}></input>
            </form>
        )
    }
export default Search

Search.propTypes = {
    onSearch: PropTypes.func
}