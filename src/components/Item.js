import React from 'react';
import checkMark from '../images/icon-check.svg';
import remove from '../images/icon-cross.svg';

const Item = ({ filteredTodoList, handleDelete, handleChecked, darkTheme }) => {
    return (
        <>
            {filteredTodoList.map(item => (
                <div className='container list-item' key={item.id} style={{backgroundColor: darkTheme ? 'hsl(235, 24%, 19%)' : 'white'}}>
                    <div onClick={() => handleChecked(item.id)}>
                        <span className={`round-checkbox ${item.checked && 'is-checked'}`}>
                            <img 
                                style={{opacity: item.checked ? 1 : 0}}
                                src={checkMark} className='checkmark' alt="" />
                        </span>
                    </div>
                    <div>
                        <p 
                            className={`
                                ${darkTheme && item.checked && 'dark-checked'}
                                ${darkTheme && !item.checked && 'dark-unchecked'}
                                ${!darkTheme && item.checked && 'light-checked'}
                                ${!darkTheme && !item.checked && 'light-unchecked'}`
                            }
                        >
                            {item.todoName}
                        </p>
                    </div>
                    <div onClick={() => handleDelete(item.id)}>
                        <img src={remove} className='remove-icon' alt="" />
                    </div>
                </div>                        
            ))}
        </>
    )
}

export default Item;
