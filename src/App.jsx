import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Investor, Login, Register } from './components'
import Umkm from './components/umkm/Umkm'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/investor/*' element={<Investor />} />
        <Route path='/umkm/*' element={<Umkm />} />
        <Route path='*'>Not Found</Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
