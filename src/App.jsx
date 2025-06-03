import { useState,  } from 'react'
import { useQuiz } from './context/QuizContext'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import CategorySelector from './components/CategorySelector'
import QuestionPage from './components/QuestionPage'
import ResultsPage from './components/ResultsPage'
import AppWrapper from './components/AppWrapper'
import './App.css'

function App() {
const {category, isDarkMode, onToggleDarkMode} =useQuiz()

  return (
    <>
     <BrowserRouter>
        <AppWrapper category={category}
        isDarkMode={isDarkMode}
        onToggleDarkMode={onToggleDarkMode} >
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
