import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Investor, Login, Register } from './components'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/investor/*' element={<Investor />} />
        <Route path='*'>Not Found</Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
