import React, { useState,useEffect } from 'react'
import data from '../data/data.json'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuiz } from '../context/QuizContext'

export default function QuestionPage() {
  const {category, questionIndex} = useParams()
  const questionIdx = parseInt(questionIndex, 10)
  const quiz = data.quizzes.find(q => q.title.toLowerCase() === category.toLowerCase())
  const questions = quiz ? quiz.questions : []
  const currentQuestion = questions[questionIdx]
  const answerLabels = ['A','B','C','D']
  const navigate = useNavigate()
  const {score, setScore} = useQuiz()
  const [selected, setSelected] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  if(!currentQuestion){
    return <div>No question </div>
  }

  const handleAnswer = (option) => {
    setSelected(option)
  }
  const handleSubmit = () => {
    setIsSubmitted(true)
    if (selected === currentQuestion.answer) {
      setScore(score + 1)
    }
  }

  useEffect(() => {
    console.log('Selection : ' , selected)
  },[selected])
  
  // handle next question
  const handleNext = () =>{
    setSelected(null) // resets for next question
    if(questionIdx + 1 < questions.length){
      navigate(`quiz/${category}/${questionIdx + 1}`)
    }else{ 
      // Once reaches over q 10 naviagte to results page
      navigate('/result')
    }
  }
  return (
    <section className='mt-8 w-full'>
      <div className='flex flex-col gap-3'>
        <span>Question {questionIdx + 1} of  10</span>
        <p className='font-semibold'>{currentQuestion.question}</p>
      </div>
      <div className='mt-10 flex flex-col gap-4'>
        {currentQuestion.options.map((option,idx) => {
          const isSelected = selected === option
          const isCorrect = option === currentQuestion.answer

          let borderClass = 'border-2 border-transparent group hover:border-purple-500'
          let letterClass = 'w-10 h-10 flex justify-center items-center rounded-xl transition-colors bg-gray-300 group-hover:bg-purple-500 group-hover:text-white'

          if(isSubmitted){
          if(isCorrect){
             borderClass = 'border-2 border-green-500'
            letterClass = 'w-10 h-10 flex justify-center items-center rounded-xl transition-colors bg-green-500 text-white'
          } else if (isSelected) {
             borderClass = 'border-2 border-red-500'
             letterClass = 'w-10 h-10 flex justify-center items-center rounded-xl transition-colors bg-red-500 text-white'
          } }
          else if(isSelected){
            borderClass = 'border-2 border-purple-500'
            letterClass = 'w-10 h-10 flex justify-center items-center rounded-xl transition-colors bg-purple-500 text-white'
          }
          
          
          return (
            <div  
            key={idx}
            onClick={() => !isSubmitted && handleAnswer(option)}
            className={`flex gap-4 bg-white p-4 rounded-xl cursor-pointer ${borderClass}`}
            >

            <div className={letterClass}>{answerLabels[idx]}</div>
            <div className='flex items-center font-semibold'>{option}</div>
          </div>
          
          )
         
        })}
      </div>

      {!isSubmitted ? (
       <button
        onClick={handleSubmit}
        disabled={selected === null}
        className='bg-purple-500 text-white p-4 text-center mt-4 rounded-xl w-full cursor-pointer disabled:opacity-50'
        >
          Submit Answer
       </button>
      ): (
        <button
          onClick={handleNext}
          className='bg-purple-500 text-white p-4 text-center mt-4 rounded-xl w-full cursor-pointer'
        >
          Next Question
        </button>
      )}

     
    </section>
  )
}
