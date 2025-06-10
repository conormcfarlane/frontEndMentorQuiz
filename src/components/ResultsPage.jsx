import React from 'react'
import { useQuiz } from '../context/QuizContext'

export default function ResultsPage() {
    const {score, category, selectedCategory} = useQuiz()
  return (
    <section className='mt-8 flex flex-col lg:flex-row lg:gap-20 lg:items-start'>
      <div className='flex flex-col gap-3'>
        <h2 className='text-4xl md:text-6xl dark:text-white'>Quiz completed</h2>
        <p className='font-bold text-4xl md:text-6xl dark:text-white'>You scored...</p>
      </div>
      <div className='flex flex-col gap-6 flex-grow'>
        <div className='mt-10 lg:mt-0 md:mt-16 bg-white py-8 md:py-12 flex flex-col items-center gap-6 md:gap-10 flex-grow rounded-3xl dark:bg-gray-700'>
        <div className='flex items-center gap-4 md:text-3xl'>  
            <img src={selectedCategory?.img} className='dark:bg-cyan-50 rounded-xl' alt="" />
           <p className='font-semibold dark:text-white'>{category}</p>
        </div>
       
        <p className='font-bold text-8xl md:text-9xl text-gray-700 dark:text-white'>{score}</p> 
        <p className='text-2xl text-gray-700 dark:text-white'>out of 10</p> 
      </div>
      
         <button className='bg-purple-500 text-white p-4 text-center mt-4 rounded-xl w-full cursor-pointer md:text-3xl md:py-8'>
        Play again
      </button>   
       </div>
     
    </section>
  )
}
