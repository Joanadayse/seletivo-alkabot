import { useState } from "react";
import Comments from "../../Pages/commentsPage/Comments";

import { ContainerCards, Imagem, Title, Button } from "./styled";

export default function Cards({ id, title, body }) {
  const [showElement, setShowElement] = useState(false);
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
          src={
            "https://image.freepik.com/vetores-gratis/icone-de-perfil-de-pessoas_24877-40756.jpg"
          }
          alt="foto"
        />
        <Title>Title: {title}</Title>
        <p>{body}</p>
        {button()}
      </ContainerCards>

      <div>{showElement ? <Comments id={id} /> : null}</div>
    </>
  );
}
