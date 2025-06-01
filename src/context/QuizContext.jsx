import { createContext, useContext, useState } from "react";

// Creates new context object
const QuizContext = createContext();

// This will be provider conponent to wrap app in
export function QuizProvider({children}){
    const [score,setScore] = useState(0)
    const [answers, setAnswers] = useState([])
    const [category, setCategory] = useState('')
    
    // reset when restarted
    const resetQuiz = () => {
        setScore(0)
        setAnswers([])
        setCategory('')
    }

    return(
        // Provdies app with state and setters
        <QuizContext.Provider value={{score,setScore,answers,setAnswers,category,setCategory,resetQuiz}}>
            {children}
        </QuizContext.Provider>
    )
}
// Helper hook to use context in conponents
export function useQuiz() {
    return useContext(QuizContext)
}