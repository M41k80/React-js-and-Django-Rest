import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Task_Page } from './pages/Task_Page'
import { Task_Form_Page } from './pages/Task_Form_Page'
import { Navigation } from './components/Navigation'
import { Toaster } from 'react-hot-toast'

function App() {
  return(
    <BrowserRouter>
    <div className="container mx-auto">
    <Navigation /> 
    <Routes>
    <Route path='/' element={<Navigate to='/tasks' />} />
    <Route path='/tasks' element={<Task_Page></Task_Page>} />
    <Route path='/create' element={<Task_Form_Page></Task_Form_Page>} />
    <Route path='/tasks/:id' element={<Task_Form_Page></Task_Form_Page>} />
    </Routes>
    <Toaster/>
    </div>
    
    </BrowserRouter>
  )
  
}

export default App