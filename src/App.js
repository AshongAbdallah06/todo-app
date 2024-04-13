import React, { useState } from 'react';
import './App.css';
import BackgroundImage from './components/BackgroundImage';
import Content from './components/Content';

function App() {
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([
        {todoName: "Watch TV", id: 1, checked: false},
        {todoName: "Clean my room", id: 2, checked: false},
        {todoName: "Sleep early", id: 3, checked: false}
    ]);

    const handleAddClick = () => {
        const id = todoList.length ? todoList[todoList.length - 1].id + 1 : 1
        setTodoList([...todoList, {todoName: todo, id, checked: false}]);
    }

    const handleDelete = (id) => {
        const newTodoList = todoList.filter((item) => item.id !== id);
        setTodoList(newTodoList);
    }

    const handleChecked = (id) => {
        const newTodoList = todoList.map((item) => item.id === id ? {...item, checked: !item.checked } : item );
        setTodoList(newTodoList)
    }

    const handleClearCompleted = () => {
        const newTodoList = todoList.filter((item) => item.checked !== true);
        setTodoList(newTodoList)
    }

    const handleShowAll = () => {
        // const newTodoList = todoList.filter((item) => ...item);
        setTodoList(todoList)
        console.log(todoList)
    }

    const handleShowCompleted = () => {
        const newTodoList = todoList.filter((item) => item.checked === true);
        setTodoList(newTodoList)
    }
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
                    handleShowAll={handleShowAll}
                />
                </div>

            </div>
        </div>
    );
}

export default App;
