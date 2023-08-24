'use client'
import React,{useState,useEffect} from 'react'
import Card from './card'

const PromptCardList=({data,handleTagClick})=>{
   return (
     <div className='mt-16 prompt_layout'>
         {
           data.map((post)=>(
               <Card key={post._id} post={post} handleTagClick={handleTagClick}/>
           ))
         }
     </div>
   )
}
const Feed = () => {
  const [searchText,setSearchText]=useState('')
  const [posts,setPosts]=useState([])
  const handleChange=(e)=>{
      
  }
  useEffect(()=>{
      const fetchPosts=async ()=>{
           const res=await fetch('/api/prompt')
           const data=await res.json()
            setPosts(data)
      }
      fetchPosts()
  })
  return (
    <section className='feed'>
       <form className='relative w-full flex-center'>
          <input type="text" 
            value={searchText}
            onChange={handleChange}
            placeholder='search for tag or a username'
            required
            className='search_input peer'
          />
       </form>
       <PromptCardList
          data={posts}
          handleTagClick={()=>{}}
       />
    </section>
  )
}

export default Feed