// 使用数组作为状态
import  { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState(['学习 React', '做练习']);

  const addTodo = () => {
    setTodos([...todos, '新任务']);
  };

  const removeTodo = () => {
    setTodos(todos.slice(0, todos.length - 1));
  };

  return (
    <div>
      <h3>待办事项</h3>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button onClick={addTodo}>添加任务</button>
      <button onClick={removeTodo}>删除任务</button>
    </div>
  );
};

export default TodoList;