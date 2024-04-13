import React from 'react';
import Top from './Top';
import TodoItems from './TodoItems';
import Filters from './Filters';


const Content = ({ 
    todo, setTodo, todoList, handleAddClick, handleDelete, handleChecked, handleClearCompleted, handleShowCompleted, handleShowAll
}) => {

    return (
        <div className="absolute">
            <Top 
                todo={todo}
                setTodo={setTodo}
                handleAddClick={handleAddClick}
            />

            <TodoItems 
                todoList={todoList}
                handleDelete={handleDelete}
                handleChecked={handleChecked}
                handleClearCompleted={handleClearCompleted}
            />

            <Filters 
                handleShowCompleted={handleShowCompleted}
                handleShowAll={handleShowAll} 
            />

        </div>
    )
}

export default Content