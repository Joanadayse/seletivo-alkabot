import { useState } from "react";
import Comments from "../Comments/Comments";
import { ContainerCards, Imagem, Title, Paragraf } from "./styled";

export default function Cards({ id, title, body }) {
  const [showElement, setShowElement] = useState(false);
  const showOrHide = () => {
    setShowElement(true);
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
        <Paragraf>{body}</Paragraf>

        <button onClick={showOrHide}>comentarios</button>
      </ContainerCards>

      <div>{showElement ? <Comments id={id} /> : null}</div>
    </>
  );
}
