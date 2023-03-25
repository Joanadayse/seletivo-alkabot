import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "../components/Cards/Cards";
import Comments from "../components/Comments/Comments";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import { ContainerHome } from "./styled";

export default function HomePage() {

  const [posts, setPosts] = useState([])

	const getPosts= async()=>{
		try{
			const result= await axios.get("http://jsonplaceholder.typicode.com/posts")
		setPosts(result.data)
    
		}catch(error){
			console.log(error.result)
		}
	}

	useEffect(()=>{
		getPosts()
	},[])

	// console.log(posts)
  return (
    <ContainerHome>
		<Header/>
		<Comments />
     {posts.map((post)=>{
      return <Cards key={post.id} title={post.title} body={post.body} id={post.id} />
     })}
    <Footer/>
     
    </ContainerHome>
  );
}
