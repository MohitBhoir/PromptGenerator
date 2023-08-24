import React from 'react'
import Feed from '@components/feed'

const Home= () => {
  return (
    <section className='w-full flex-center flex-col'>
         <h1 className='head_text text-center'>
           Discover & share
           <br className='max-md:hidden'/>
           <span className='orange_gradient text-center'>AI-powered prompts</span>
         </h1>
         <p className='desc text-center'>An open-source AI powered to discover,create and share creative prompts</p>

         <Feed/>
    </section>
  )
}

export default Home