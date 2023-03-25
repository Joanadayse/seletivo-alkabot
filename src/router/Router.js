import { BrowserRouter, Route, Routes } from "react-router-dom";
import Comments from "../components/Comments/Comments";
import HomePage from "../homePage/HomePage";


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