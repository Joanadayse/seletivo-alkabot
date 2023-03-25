import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ContainerComments } from "./styled"



export default function Comments ({id}){

 
    // const {id}= useParams()
    const [comments, setComments] = useState([])
   
   
	const getComments= async(id)=>{
		try{
		
            const result= await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
		setComments(result.data)
    
		}catch(error){
			console.log(error.result)
		}
	}

	useEffect(()=>{
		getComments(id)
	},[])

	console.log(comments)



    return (
        <ContainerComments>
            <h1>Comentarios</h1>
            {comments.length > 0 ? 
           <>
           {comments.map((comment)=>{
            return <>
             <p>Name:{comment.name}</p>
            <p>{comment.body}</p>
           
            </>
           })}
           </> :
            <> </>
            }
            <button>perfil do usuario</button>
        </ContainerComments>
    )
}