import React, { Children } from 'react'
import iconSunLight from '../../public/images/icon-sun-light.svg'
import iconSunDark from '../../public/images/icon-sun-dark.svg'
import iconMoonLight from '../../public/images/icon-moon-light.svg'
import iconMoonDark from '../../public/images/icon-moon-dark.svg'
import { useQuiz } from '../context/QuizContext'

export default function AppWrapper({children, category, onToggleDarkMode,isDarkMode}) {
    const {selectedCategory} = useQuiz()
  return (
    <div className={`
         p-6 min-h-screen bg-no-repeat bg-cover transition-colors
         bg-blue-50 flex justify-center dark:bg-gray-800
        bg-[url('/images/pattern-background-mobile-light.svg')]
        dark:bg-[url('/images/pattern-background-mobile-dark.svg')]
        md:bg-[url('/images/pattern-background-tablet-light.svg')]
        md:dark:bg-[url('/images/pattern-background-tablet-dark.svg')]
        lg:bg-[url('/images/pattern-background-desktop-light.svg')]
        lg:dark:bg-[url('/images/pattern-background-desktop-dark.svg')]
        
    `}>
        <div className='w-full md:max-w-[650px] lg:max-w-[1157px] mx-auto'>
             {/* Header */}
        <header className='flex justify-between '>
            <div className='flex items-center gap-4'>
            <img src={selectedCategory?.img} alt="" className='dark:bg-cyan-50 rounded-xl' />
           <span className='dark:text-white md:text-2xl font-semibold'>{category || ''}</span>
            </div>
           

            <div className='flex justify-self-end gap-2 items-center'>
                {/* Light Mode Sun */}
                <img src={iconSunDark} className='dark:hidden h-4' alt="" />
                {/* Dark Mode Sun */}
                <img src={iconSunLight} className='hidden dark:block h-4' alt="" />
                <button onClick={onToggleDarkMode} className='cursor-pointer'>
                    <div className='bg-purple-600 w-12 h-6 p-1 rounded-2xl flex items-center'>
                        <div className={`w-5 h-4 rounded-2xl bg-white transition-all duration-500
                            ${isDarkMode ? 'translate-x-5' : 'ml-0'}`}></div>
                    </div>
                </button>
                {/* Light Mode Moon */}
                <img src={iconMoonDark} className='dark:hidden h-4' alt="" />
                {/* Dark mode Moon */}
                <img src={iconMoonLight} className='hidden dark:block h-4' alt="" />
            </div>
           
        </header>
        <main>
               {children}
        </main>
        </div>
       
     
    </div>
  )
}
