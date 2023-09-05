import React from 'react';
import './weather.css';
function SearchSection() {
    return (
        <section id="search-section">
            <form id="city-search-form" className="search-container">
                <input type="text" id="city-name" placeholder="Type your city here" />
                <button type="submit" id="search-button">Search</button>
            </form>
        </section>
    );
}

export default SearchSection;