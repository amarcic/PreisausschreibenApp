import React from 'react';

export default function SearchBar(props) {
    return(
        <form onSubmit={props.submit}>
        <label>Search
            <input type="text" value={props.value} onChange={props.change}/>
        </label>
        
        <input type="submit" value="Submit" />
        </form>
    );
}