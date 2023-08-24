import { connectDB } from "@utils/DB"
import Prompt from "@models/prompt"

export const POST=async(req,res)=>{
    const {userId,prompt,tag}=await req.json()
    try {
        await connectDB()
        const newPrompt=new Prompt({
              creator:userId,
              prompt:prompt,
              tag:tag
        })
        await newPrompt.save()
        return new Response(JSON.stringify(newPrompt),{status:201})
    } catch (error) {
        return new Response("Failed to create new Prompt",{status:500})
    }
}