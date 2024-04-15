import React from 'react';
import Top from './Top';
import TodoItems from './TodoItems';
import Filters from './Filters';


const Content = ({ 
    todo, setTodo, todoList, handleAddClick, handleDelete, handleChecked, handleClearCompleted, handleShowCompleted, handleShowActive, handleShowAll, filterState, filteredTodoList, listLength, darkTheme, setDarkTheme
}) => {

    return (
        <div className="absolute">
            <Top 
                todo={todo}
                setTodo={setTodo}
                handleAddClick={handleAddClick}
                darkTheme={darkTheme}
                setDarkTheme={setDarkTheme}
            />

            <TodoItems 
                todoList={todoList}
                handleDelete={handleDelete}
                handleChecked={handleChecked}
                handleClearCompleted={handleClearCompleted}
                filteredTodoList={filteredTodoList}
                listLength={listLength}
                handleShowAll={handleShowAll}
                handleShowActive={handleShowActive}
                handleShowCompleted={handleShowCompleted}
                darkTheme={darkTheme}
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