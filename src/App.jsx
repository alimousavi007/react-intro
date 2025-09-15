import { useState } from "react";
import './App.css';
import PostList from "./components/PostList";

function TodoForm({onAddTask}){
  const [inputText, setInputText] = useState('');

  const handleSubmit = (event) => {
    // ۱. جلوگیری از رفرش شدن صفحه

    event.preventDefault();

    onAddTask(inputText);
    setInputText('');
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputText} onChange={ e => setInputText(e.target.value) } placeholder="کار جدید وارد کن..."/>
      <button type="submit">افزودن</button>
    </form>
  );
}

/* این کامپوننت آرایه todos و توابع onDelete و onToggleComplete را از App به عنوان prop دریافت می‌کند. */
function TodoList({todos, onDelete, onToggleComplete}){
  return(
    <ul>
      {todos.map( todo => 
        <TodoItem key={todo.id} todo={todo} onToggleComplete={onToggleComplete} onDelete={onDelete} />
      )}
    </ul>
  );
}
/* این کامپوننت یک آبجکت todo و توابع onDelete و onToggleComplete را از TodoList به عنوان prop دریافت می‌کند.*/
function TodoItem({todo, onDelete, onToggleComplete}){
  return(
    <li className={`todo-item ${todo.completed ? "completed":""}`}>
      <span>{todo.text}</span>
      <div className="actions">
        <button className="complete-btn" onClick={() => onToggleComplete(todo.id)}>✓</button>
        <button className="delete-btn"   onClick={() => onDelete(todo.id)}>×</button>
      </div>
    </li>
  );
}

function App(){
const [todos, setTodos] = useState([{id: 1, text: 'اولین تسک من', completed: false}]);

  const handleAddTask = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };
    //yek copy az araye todos ba tamame ozvash migirim, baad araye newTodo ro behesh ezafe mikonim
    const updateTodos = [...todos, newTodo];
    setTodos(updateTodos);

    /* const handleAddTask = (text) => {
      setTodos([...todos, {id: Date.now, text:text, completed: false}]);
      };
    */
  };

  const handleDeleteTask = (idToDelete) => {
    setTodos(todos.filter(todo => todo.id !== idToDelete));
  };

  const handleToggle = (idToToggle) => {
setTodos(
  todos.map(todo => 
    (todo.id === idToToggle 
      ? { ...todo, completed: !todo.completed } 
      : todo)
  )
);
  };
  return(
    <>
    <div className="app-container">
      <TodoForm onAddTask={handleAddTask}/>
      <TodoList
        todos = {todos}
        onToggleComplete = {handleToggle}
        onDelete = {handleDeleteTask}
      />
    </div>
    <hr />
    <h1>لیست پستها</h1>
    <div className="app-container">
      <PostList/>
    </div>
    </>
  );
}
export default App;
