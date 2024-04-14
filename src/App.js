import React, { useEffect, useState } from 'react';
import './App.css';
import BackgroundImage from './components/BackgroundImage';
import Content from './components/Content';

function App() {
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('todolist')) || []);
    const [filterState, setFilterState] = useState("All");
    const [filteredTodoList, setFilteredTodoList] = useState([]);

    useEffect(() => {
        localStorage.setItem('todolist', JSON.stringify(todoList));
    }, [todoList]);

    useEffect(() => {
        filterTodoList();
    }, [todoList, filterState]);

    const filterTodoList = () => {
        switch (filterState) {
            case "Active":
                setFilteredTodoList(todoList.filter(item => !item.checked));
                break;
            case "Completed":
                setFilteredTodoList(todoList.filter(item => item.checked));
                break;
            default:
                setFilteredTodoList(todoList);
        }
    };

    const handleAddClick = () => {
        const id = todoList.length ? todoList[todoList.length - 1].id + 1 : 1
        setTodoList([...todoList, {todoName: todo, id, checked: false}]);
    };

    const handleDelete = (id) => {
        const newTodoList = todoList.filter((item) => item.id !== id);
        setTodoList(newTodoList);
    };

    const handleChecked = (id) => {
        const newTodoList = todoList.map(
            (item) => item.id === id ? {...item, checked: !item.checked } : item 
        );
        setTodoList(newTodoList);
    };

    const handleClearCompleted = () => {
        const newTodoList = todoList.filter((item) => !item.checked);
        setTodoList(newTodoList);
    };

    const handleShowAll = () => {
        setFilterState("All");
    };

    const handleShowActive = () => {
        setFilterState("Active");
    };

    const handleShowCompleted = () => {
        setFilterState("Completed");
    };


    return (
        <div className="App">
            <BackgroundImage />

            <div className="section-container">

                <div className='bottom-bg'>
                <Content 
                    todo={todo}
                    setTodo={setTodo}
                    todoList={todoList}
                    handleAddClick={handleAddClick}
                    handleDelete={handleDelete}
                    handleChecked={handleChecked}
                    handleClearCompleted={handleClearCompleted}
                    handleShowCompleted={handleShowCompleted}
                    handleShowActive={handleShowActive}
                    handleShowAll={handleShowAll}
                    filteredTodoList={filteredTodoList}
                />
                </div>

            </div>
        </div>
    );
}

export default App;
