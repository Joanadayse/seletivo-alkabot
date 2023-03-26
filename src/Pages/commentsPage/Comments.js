import { useContext, useEffect, useState } from "react";
import CardComments from "../../components/CardComments/CardComments";
import { GlobalContext } from "../../context/GlobalContext";
import { ContainerComments } from "./styled";

export default function Comments({ id }) {

  const context = useContext(GlobalContext);

  const {comments, getComments } = context;
  
  useEffect(() => {
    getComments(id);
  }, []);


  return (
    <>
      <ContainerComments>
    
        {comments.length > 0 ? (
          <>
            {comments.map((comment) => {
              return <CardComments key={comment.id} name={comment.name} body={comment.body} />;
            })}
          </>
        ) : (
          <> </>
        )}
      </ContainerComments>
    </>
  );
}
