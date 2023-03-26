import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersCard from "../components/UsersCard/UsersCard";
import Comments from "../Pages/commentsPage/Comments";
import HomePage from "../Pages/homePage/HomePage";
import UsersData from "../Pages/PageUser/UsersData";


export default function Router(){
return(
    <BrowserRouter>
    <Routes>
        <Route index path="/" element={<HomePage/>}/>
        <Route  path="/comments/:id" element={<Comments/>}/>
        <Route   path="/users/:id" element={<UsersData/>}/>
    </Routes>
    
    
    </BrowserRouter>
)
}