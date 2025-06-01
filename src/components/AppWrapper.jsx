import React, { Children } from 'react'

export default function AppWrapper({children, category, onToggleDarkMode}) {
  return (
    <div className={`
         min-h-screen bg-no-repeat bg-cover transition-colors
        bg-[url('public/images/pattern-background-mobile-light.svg')]
        dark:bg-[url('/images/pattern-background-mobile-dark.svg')]
        md:bg-[url('/images/pattern-background-tablet-light.svg')]
        md:dark:bg-[url('/images/pattern-background-tablet-dark.svg')]
        lg:bg-[url('/images/pattern-background-desktop-light.svg')]
        lg:dark:bg-[url('/images/pattern-background-desktop-dark.svg')]
        
    `}>
        {/* Header */}
        <header>
            {category && (
                <span>{category}</span>
            )}
            <button onClick={onToggleDarkMode}>
                <div className='bg-purple-600 w-12 h-6 p-1 rounded-2xl flex items-center'>
                    <div className='w-5 h-4.5 rounded-2xl bg-white'></div>
                </div>
            </button>
        </header>
        <main>
               {children}
        </main>
     
    </div>
  )
}
