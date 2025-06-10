import { createContext, useContext, useState } from "react";

// Creates new context object
const QuizContext = createContext();

// This will be provider conponent to wrap app in
export function QuizProvider({children}){
    const [score,setScore] = useState(0)
    const [answers, setAnswers] = useState([])
    const [category, setCategory] = useState('')
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [isDarkMode, setIsDarkMode] = useState(false)
    
    // reset when restarted
    const resetQuiz = () => {
        setScore(0)
        setAnswers([])
        setCategory('')
    }
    const onToggleDarkMode = () => {
        document.documentElement.classList.toggle('dark')
        setIsDarkMode(prev => !prev)
        console.log('dark')
    }

    return(
        // Provdies app with state and setters
        <QuizContext.Provider value={{score,setScore,answers,setAnswers,category,setCategory,resetQuiz,isDarkMode,onToggleDarkMode,selectedCategory,setSelectedCategory}}>
            {children}
        </QuizContext.Provider>
    )
}
// Helper hook to use context in conponents
export function useQuiz() {
    return useContext(QuizContext)
}