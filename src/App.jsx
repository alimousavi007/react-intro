// src/App.jsx
import './App.css'
import Greeting from './components/Greeting.jsx'
import Card from './components/Card.jsx' // ۱. وارد کردن Card

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
    </>
  )
}

export default App