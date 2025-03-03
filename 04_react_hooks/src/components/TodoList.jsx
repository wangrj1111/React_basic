import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // 处理输入框变化
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // 添加新待办事项
  const addTodo = () => {
    if (inputValue) {
      setTodos([...todos, { text: inputValue, completed: false }]);
      //清空输入框
      setInputValue("");
    }
  };

  // 标记事项为已完成
  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>待办事项列表</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="添加新事项"
      />
      <button onClick={addTodo}>添加</button>
      <ul>
        {/* 遍历 todos 并渲染 */}
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            onClick={() => toggleComplete(index)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
