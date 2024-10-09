import React from 'react'
import { testimonials } from '../constants'

export const Testimontials: React.FC = () => {
  return (
    <section id='testimonials' className='mt-20 tracking-wide'>
        <h2 className='text-center sm:text-5xl lg:text-6xl my-10 lg:my-20'>What People are saying</h2>
        <div className='flex flex-wrap justify-center'>
            {testimonials.map((testimontial, index) => (<div key={index} className='w-full sm:w-1/2 lg:w-1/3  px-4 py-2'>
                <div className='bg-neutral-900 p-10 border rounded-md border-neutral-800 text-md font-thin'>
                    <p>{testimontial.text}</p>
                    <div className='flex mt-8 items-start'>
                        <img src={testimontial.image} alt="user opinion" className='w-12 h-12 mr-6 rounded-full border border-neutral-300'/>
                        <div className=''>
                            <h6>{testimontial.user}</h6>
                            <span className='text-sm font-normal italic text-neutral-600'>{testimontial.company}</span>
                        </div>
                    </div>
                </div>

            </div>))}
        </div>
    </section>
  )
}

