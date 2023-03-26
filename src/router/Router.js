import { BrowserRouter, Route, Routes } from "react-router-dom";
import Comments from "../Pages/commentsPage/Comments";
import HomePage from "../Pages/homePage/HomePage";


export default function Router(){
return(
    <BrowserRouter>
    <Routes>
        <Route index path="/" element={<HomePage/>}/>
        <Route  path="/comments/:id" element={<Comments/>}/>
        {/* <Route   path="/users" element={}/> */}
    </Routes>
    
    
    </BrowserRouter>
)
}