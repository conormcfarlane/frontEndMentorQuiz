import { useState,  } from 'react'

import { BrowserRouter, Routes, Route} from "react-router-dom"
import CategorySelector from './components/CategorySelector'
import QuestionPage from './components/QuestionPage'
import ResultsPage from './components/ResultsPage'
import AppWrapper from './components/AppWrapper'
import './App.css'

function App() {


  return (
    <>
     <BrowserRouter>
        <AppWrapper>
        <Routes>
        <Route path='/' element={<CategorySelector />}/>
        <Route path='/quiz/:category/:questionIndex' element={<QuestionPage />}/>
        <Route path='/result' element={<ResultsPage />}/>
      </Routes>
     </AppWrapper>
      
     </BrowserRouter>
    </>
  )
}

export default App
