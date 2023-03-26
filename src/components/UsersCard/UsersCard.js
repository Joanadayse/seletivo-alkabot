
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../router/coordinator";
import { ContainerUsers, ButtonHome , DivButton } from "./styled";

export default function UsersCard({ name, user, phone, email }) {
  const navigate = useNavigate();

  return (
<>

<ContainerUsers>
      <ul>
        <h1>Dados do Usuario:</h1>
        <li>Nome:
          <p>{name}</p>
        </li>
        <li>UserName:
          <p>{user}</p> </li>
        <li>Contato:
           <p>{phone}</p>
        </li>
        <li>Email:
        <p> {email}</p>  
        </li>
      </ul>


    </ContainerUsers>

<DivButton>
<ButtonHome onClick={() => goToHome(navigate)}>Voltar</ButtonHome>

</DivButton>



</>
  );
}
