import React from 'react';
import Top from './Top';
import TodoItems from './TodoItems';
import Filters from './Filters';


const Content = ({ 
    todo, setTodo, todoList, handleAddClick, handleDelete, handleChecked, handleClearCompleted, handleShowCompleted, handleShowActive, handleShowAll, filterState, filteredTodoList
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
                filteredTodoList={filteredTodoList}
            />

            <Filters 
                handleShowCompleted={handleShowCompleted}
                handleShowActive={handleShowActive} 
                handleShowAll={handleShowAll}
                filterState={filterState}
            />

        </div>
    )
}

export default Content