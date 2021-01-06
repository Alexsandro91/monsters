import React from "react";
import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
    <input type='search' 
          className = 'search'      
          placeholder = { placeholder }
          onChange = { handleChange }
          /*onChange = {e => { this.setState({searchField: e.target.value})
          onChange = {e => { this.setState({searchField: e.target.value}, () => {
            console.log(this.state)
          }) // per visualizzare lo state aggiornato
        }/
    }*/
        />
);