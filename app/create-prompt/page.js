'use client'
import React,{useState} from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Form from '@components/form'

const CreatePrompt = () => {
  const router=useRouter()
  const {data:session}=useSession()
  const [submit,setSubmit]=useState(false)
  const [post,setPost]=useState({
     prompt:'',
     tag:''
  })
  const createPrompt=async(e)=>{
       e.preventDefault()
       setSubmit(true)

       try {
          const res=await fetch('/api/prompt/new',{
             method:'POST',
             body:JSON.stringify({prompt:post.prompt,userId:session?.user.id,tag:post.tag})
          })
          if(res.ok){
             router.push('/')
          }
       } catch (error) {
          console.log(error)
       }finally{
          setSubmit(false)
       }
  }
  return (
    <Form 
     type='Create'
     post={post}
     setPost={setPost}
     submitting={submit}
     handleSubmit={createPrompt}
    />
  )
}

export default CreatePrompt