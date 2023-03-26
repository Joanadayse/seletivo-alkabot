
import { Coment, Name } from "./styled";

export default function CardComments({ name, body }) {


  return (
    <>

          <Name>Name: {name}</Name>
          <Coment>{body}</Coment>
        
   
    </>
  );
}
