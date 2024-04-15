import React from 'react'
import Item from './Item'
import EmptyList from './EmptyList'
import ItemCount from './ItemCount'

const TodoItems = ({ 
    todoList, handleDelete, handleChecked, handleClearCompleted, filteredTodoList, listLength, handleShowAll, handleShowActive, handleShowCompleted, filterState, darkTheme
}) => {
    return (
        <section className='lists'
            style={{boxShadow: '0 0 2rem rgba(0, 0, 0, 0.2'}}
        >

            <Item 
                todoList={todoList} 
                handleDelete={handleDelete}
                handleChecked={handleChecked}
                filteredTodoList={filteredTodoList}
                darkTheme={darkTheme}
            />

            <EmptyList darkTheme={darkTheme} filteredTodoList={filteredTodoList} />

            <ItemCount 
                todoList={todoList} 
                handleClearCompleted={handleClearCompleted}
                listLength={listLength}
                filterState={filterState}
                handleShowAll={handleShowAll}
                handleShowActive={handleShowActive}
                handleShowCompleted={handleShowCompleted}
                darkTheme={darkTheme}
            />
        </section>
    )
}

export default TodoItems