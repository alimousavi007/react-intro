// src/App.jsx
import './App.css'
import Greeting from './components/Greeting.jsx' // ۱. کامپوننت را وارد کن

function App() {
  return (
    <>
      <Greeting name="علی" message="سلام" />
      <Greeting name="سارا" message="خوش آمدی" />
      <Greeting name="احمد" message="خوش اومدی جیییگر!"/>
      <Greeting name="تیم توسعه" message="درود بر" />
    </>
  )
}

export default App