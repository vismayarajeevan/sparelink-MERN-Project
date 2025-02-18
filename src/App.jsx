
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import CardOverView from './Pages/CardOverView'
import ChoiceView from './Pages/ChoiceView'
import CategoryView from './Pages/CategoryView'
import MyPost from './Pages/MyPost'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/overview/:id' element={<CardOverView />} />
        <Route path='/choices' element={<ChoiceView />} />
        <Route path='/category/:categoryName' element={<CategoryView />}/>
        <Route path='/myposts' element={<MyPost/>} />
      </Routes>
    </>
  )
}

export default App
