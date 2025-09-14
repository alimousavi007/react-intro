import { useState } from "react"; 

function Counter(){
    // ۲. یک state جدید به نام count تعریف کن
  // مقدار اولیه آن 0 است
    const [count, setCount] = useState(0);
    
function handleIncrement(){
    setCount(count+1);

}
return(
        <div className="card">
      <h2>شمارنده: {count}</h2>
      <button onClick={handleIncrement}>افزایش</button>
    </div>
);
}

export default Counter;