
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Nav from './components/Nav'
import Home from './components/Home'
import Login from './components/Login'
import Subway from './components/Subway'
import Rest from './components/Rest'
import TodoList from './components/TodoList'

function App() {


  return (
    <BrowserRouter>
      <div className='w-full xl:w-8/10 h-screen mx-auto
                    flex flex-col justify-start items-start'>
        <Nav />  
        <main className='w-full flex-grow
            overflow-y-auto py-10
            flex flex-col justify-start items-center'>
              <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/subway' element={<Subway />}></Route>
                <Route path='/rest' element={<Rest />}></Route>
                <Route path='/todolist' element={<TodoList />}></Route>
              </Routes>
        </main>
        <footer className='w-full min-h-20
           bg-black text-amber-50
            flex justify-center items-center'>
          K-digital 2025 2기      
      </footer>
    </div>
    </BrowserRouter>
  )
}

export default App
