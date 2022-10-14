import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login, Register } from './components'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
