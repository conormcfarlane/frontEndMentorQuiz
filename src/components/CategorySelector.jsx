import React from 'react'
import iconHTML from '../../public/images/icon-html.svg'
import iconJS from '../../public/images/icon-js.svg'
import iconAccessibility from '../../public/images/icon-accessibility.svg'
import iconCSS from '../../public/images/icon-css.svg'


export default function CategorySelector() {
    const categories = [
        {name: 'HTML',img: iconHTML},
        {name: 'CSS',img: iconCSS},
        {name: 'Javascript',img: iconJS},
        {name: 'Accessibility',img: iconAccessibility}
    ]
  return (
    <>
        <div>
            <h2>Welcome to the <strong>Frontend Quiz!</strong></h2>
            <p>Pick a subject to get started</p>
        </div>
        <div>
            {categories.map((category) => {
                return(
                    <div key={category.name} className='flex'>
                        <img src={category.img} alt="" />
                        <p>{category.name}</p>
                    </div>
                )
            })}
        </div>
    </>
  )
}
