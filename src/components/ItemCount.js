import React from 'react'

const ItemCount = ({ todoList, handleClearCompleted }) => {
    return (
        <div className='container textbox bottom'>
            <p className='items-count'>
                {todoList.length && todoList.length} item{todoList.length !== 1 && 's'} left
            </p>
            <button className='clear' onClick={handleClearCompleted}>
                Clear Completed
            </button>
        </div>
    )
}

export default ItemCount