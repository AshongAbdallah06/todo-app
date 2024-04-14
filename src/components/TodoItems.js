import React from 'react'
import Item from './Item'
import EmptyList from './EmptyList'
import ItemCount from './ItemCount'

const TodoItems = ({ 
    todoList, handleDelete, handleChecked, handleClearCompleted, filteredTodoList
}) => {
    return (
        <section className="lists">

            <Item 
                todoList={todoList} 
                handleDelete={handleDelete}
                handleChecked={handleChecked}
                filteredTodoList={filteredTodoList}
            />

            <EmptyList todoList={todoList} />

            <ItemCount 
                todoList={todoList} 
                handleClearCompleted={handleClearCompleted}s
            />
        </section>
    )
}

export default TodoItems