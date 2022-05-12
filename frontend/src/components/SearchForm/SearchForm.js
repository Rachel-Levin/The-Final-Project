import './SearchForm.css';
import React from 'react';
import { Link } from 'react-router-dom';


function SearchForm() {

    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    //---РАЗМЕТКА JSX---
    return (
        <div className='searchForm'>
            <div className='searchForm__conteiner'>
            <h1 className='searchForm__title'>What's going on in the world?</h1>
            <h2 className='searchForm__text'>Find the latest news on any topic and save them in your personal account.</h2>
            {/* <input className='searchForm__input' type="text"/>
            <input className='searchForm__btn' type="submit"/> */}
            <form className='searchForm__form'>
                <input className='searchForm__input' type="text"
                value={value} 
                onChange={handleChange}
                />
                <button className='searchForm__btn' type="submit"
                disabled={!value}
                >Search</button>
            </form>
            </div>
        </div>
    );
};

export default SearchForm;