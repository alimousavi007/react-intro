// src/App.jsx
import './App.css'
import Greeting from './components/Greeting.jsx'
import Card from './components/Card.jsx' // ۱. وارد کردن Card
import Counter from './components/Counter.jsx' //اضافه کردن شمارنده

function App() {
  return (
    <>
      <Card>
        <Greeting name="علی" message="سلام" />
      </Card>

      <Card>
        <h2>این یک کارت دیگر است</h2>
        <p>ما می‌توانیم هر محتوای HTML که بخواهیم را اینجا قرار دهیم.</p>
        <button>یک دکمه</button>
      </Card>
           <Card>
        <h2>کامپوننت شمارنده</h2>
        <p>این کامپوننت حافظه داخلی خودش را دارد.</p>
        <Counter />
      </Card>
            <Card>
        <h2>یک شمارنده دیگر</h2>
        <p>هر کامپوننت State مستقل خودش را دارد.</p>
        <Counter />
      </Card>
    </>
  )
}

export default App