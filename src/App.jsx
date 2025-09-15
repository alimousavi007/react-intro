import { useState } from "react";
import './App.css'

// کامپوننت فرزند: یک تسک تنها
function TodoItem({todo, onToggleComplete,onDelete}){
  return(
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span>{todo.text}</span>
      <div className="actions">
        <button className="complete-btn" onClick={onToggleComplete(todo.id)}>✓</button>
        <button className="delete-btn" onClick={onDelete(todo.id)}>×</button>

      </div>
    </li>
  );
}
// کامپوننت فرزند: لیست تسک‌ها
function TodoList({todos, onToggleComplete, onDelete}){
  return(
    <ul>
      {todos.map(
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      )}
    </ul>
  );
}
// کامپوننت فرزند: فرم افزودن تسک
function TodoForm({onAddTask}) {
  const [text, setText] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(text.trim()){
      onAddTask(text);
      setText('');
    }
  };
  return(
    <form onSubmit={handleSubmit}>
      <input type="text" value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="یک کار جدید اضافه کن..."
      />
      <button type="submit">افزودن</button>
    </form>
  );
}
// کامپوننت اصلی: والد همه
function App(){
  // STATE اصلی برنامه اینجا زندگی می‌کند
  const [todos,setTodos] = useState([{
    id: 1,
    text: 'یادگیری React',
    completed: true },
    {
      id: 2,
      text: 'ساختن اپلیکیشن Todo List',
      completed: false 
    }
  ]);
  // تابع برای افزودن تسک
  const handleAddTask = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  // تابع برای حذف تسک
  const handleDelete = (idtoDelete) =>{
    setTodos(todos.filter(todo => todo.id !== idtoDelete));
  };
  //تابع تکمیل تسک
  const handleToggleComplete = (idToToggle) => {
    setTodos(todos.map(todo =>
      todo.id === idToToggle ? {...todo, completed: !todo.completed} : todo

    ));
  };
 return (
    <div className="app-container">
      <h1>Todo List با React</h1>
      <TodoForm onAddTask={handleAddTask} />
      <TodoList 
        todos={todos} 
        onToggleComplete={handleToggleComplete}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
