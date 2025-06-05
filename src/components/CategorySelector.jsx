import React from 'react'
import iconHTML from '../../public/images/icon-html.svg'
import iconJS from '../../public/images/icon-js.svg'
import iconAccessibility from '../../public/images/icon-accessibility.svg'
import iconCSS from '../../public/images/icon-css.svg'
import { useNavigate } from 'react-router-dom'
import {useQuiz} from '../context/QuizContext'


export default function CategorySelector() {
    const categories = [
        {name: 'HTML',img: iconHTML,bgColor: 'bg-orange-100'},
        {name: 'CSS',img: iconCSS,bgColor: 'bg-green-100'},
        {name: 'Javascript',img: iconJS,bgColor: 'bg-blue-100'},
        {name: 'Accessibility',img: iconAccessibility,bgColor: 'bg-purple-100'}
    ]
    const navigate = useNavigate()
    const {setCategory} = useQuiz()
    const handleCategoryClick = (categoryName) => {
        setCategory(categoryName)
        navigate(`/quiz/${categoryName}/0`)
    }
  return (
    <section className='flex flex-col gap-10 lg:flex-row mt-23 lg:justify-between'>
        <div className='flex flex-col gap-4 lg:w-4/8'>
            <h2 className='text-4xl md:text-6xl text-blue-900 dark:text-white'>Welcome to the <strong>Frontend Quiz!</strong></h2>
            <p className='text-sm text-gray-500 dark:text-white'>Pick a subject to get started</p>
        </div>
        <div className='flex flex-col gap-6 lg:w-4/8'>
            {categories.map((category) => {
                return(
                    <div key={category.name} 
                    className='flex bg-white dark:bg-gray-700 rounded-xl items-center gap-4 p-4 cursor-pointer
                 '  onClick={() => handleCategoryClick(category.name)}
                    >
                        <div className={`${category.bgColor} rounded-xl p-1 h-10`}>
                             <img src={category.img} alt="" className='h-8' />
                        </div>
                       
                        <p className='font-semibold md:text-2xl dark:text-white'>{category.name}</p>
                    </div>
                )
            })}
        </div>

    </section>
  )
}
