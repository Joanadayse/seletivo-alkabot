export const goToHome=(navigate)=>{
    navigate("/")
   
}


export const goToComments=(navigate,id)=>{
    navigate(`/comments/${id}`)
   
}

export const goToUser=(navigate,id)=>{
    navigate(`/users/${id}`)

   
}