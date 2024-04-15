import React, { useState } from 'react';
import sun from '../images/icon-sun.svg';
import moon from '../images/icon-moon.svg';


const Top = ({ todo, setTodo, handleAddClick, darkTheme, setDarkTheme }) => {
    const keyUp = (e) => {
        e.key === 'Enter' && handleAddClick();
    }

    return (
        <section className="top">
            <nav className='margin'>
                <div>
                <h1>TODO</h1>

                </div>
                <div onClick={() => setDarkTheme(!darkTheme)}>
                    <img src={darkTheme ? sun : moon} className='theme-icon' alt="" />
                </div>
            </nav>
            
            <div className='container textbox input'
                style={{backgroundColor: darkTheme ? 'hsl(235, 24%, 19%)' : 'white'}}
                >
                <span className='round-checkbox'></span>
                <input
                    style={{color: darkTheme ? 'white' : 'black'}}
                    onChange={(e) => {setTodo(e.target.value)}}
                    onKeyUp={keyUp}
                    type="text" 
                    placeholder='Create a new todo...' />
                    <button 
                        style={{color: darkTheme ? 'white' : 'black'}}
                        onClick={() => {todo !== '' && handleAddClick()}}
                        className='add'>
                            Add
                    </button>
            </div>
        </section>
    )
}

export default Top