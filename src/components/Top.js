import React from 'react';
import lightTheme from '../images/icon-sun.svg';


const Top = ({ todo, setTodo, handleAddClick }) => {
    return (
        <section className="top">
            <div className='margin'>
                <h1>TODO</h1>
                <img src={lightTheme} className='theme-icon' alt="" />
            </div>
            
            <div className='container textbox input'>
                <span className='round-checkbox'></span>
                <input
                    onChange={(e) => {setTodo(e.target.value)}}
                    type="text" 
                    placeholder='Create a new todo...' />
                    <button 
                        onClick={() => {todo !== '' && handleAddClick()}}
                        className='add'>
                            Add
                    </button>
            </div>
        </section>
    )
}

export default Top