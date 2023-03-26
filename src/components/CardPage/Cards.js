import {useState } from "react";
import { useNavigate } from "react-router-dom";
import Comments from "../../Pages/commentsPage/Comments";
import UsersData from "../../Pages/PageUser/UsersData";
import { goToUser } from "../../router/coordinator";
import UsersCard from "../UsersCard/UsersCard";


import { ContainerCards, Imagem, Title, Button } from "./styled";

export default function Cards({ id, title, body }) {

  const [showElement, setShowElement] = useState(false);

  const navigate=useNavigate()
  const showOrHide = () => {
    setShowElement(true);
  };

  const closePage = () => {
    setShowElement("");
  };

  const button = () => {
    if (!showElement) {
      return <Button onClick={showOrHide}>open comments</Button>;
    } else {
      return <Button onClick={closePage}>close comments </Button>;
    }
  };

  return (
    <>
      <ContainerCards>
        <Imagem
          src="https://static.miraheze.org/windowswallpaperwiki/thumb/6/67/User_(Windows_10_1507-1909).png/150px-User_(Windows_10_1507-1909).png"
          alt="imagem-card"
          title="monstrar dados do usuario"
          onClick={()=>goToUser(navigate,id)}
        />
    
        <Title>Title: {title}</Title>
        <p>{body}</p>
        
        {button()}
      </ContainerCards>

      <div>{showElement ? <Comments id={id} /> : null}</div>
    </>
  );
}
