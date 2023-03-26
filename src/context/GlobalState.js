import axios from "axios";
import { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";

export default function GlobalState(props) {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const result = await axios.get(
        "http://jsonplaceholder.typicode.com/posts"
      );

      setPosts(result.data);
    } catch (error) {
      console.log(error.result);
    }
  };

  const [comments, setComments] = useState([]);

  const getComments = async (id) => {
    try {
      const result = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
      setComments(result.data);
    } catch (error) {
      console.log(error.result);
    }
  };

  const [usersId, setUsersId] = useState([]);

  const getUsersById = async (id) => {
    try {
      const result = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setUsersId(result.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const context = {
    posts,
    comments,
    getComments,
    getUsersById,
    usersId,
  };

  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  );
}
