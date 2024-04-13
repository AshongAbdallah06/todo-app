import React from 'react';
import checkMark from '../images/icon-check.svg';
import remove from '../images/icon-cross.svg'


const Item = ({ todoList, handleDelete, handleChecked }) => {
    return (
        <>
            {todoList.map(item => (
                <div className='container list-item' key={item.id}>
                    <div onClick={() => handleChecked(item.id)}>
                        <span className={`round-checkbox ${item.checked && 'is-checked'}`}>
                            <img 
                                style={{opacity: item.checked ? 1 : 0}}
                                src={checkMark} className='checkmark' alt="" />
                        </span>
                    </div>
                    <div>
                        <p 
                            style={{
                                ...(item.checked &&{
                                textDecoration: 'line-through',
                                color: 'hsl(234, 11%, 52%)'})
                            }}>
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

export default Item