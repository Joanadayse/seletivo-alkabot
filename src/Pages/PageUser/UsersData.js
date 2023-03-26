import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import UsersCard from "../../components/UsersCard/UsersCard";
import { GlobalContext } from "../../context/GlobalContext";

export default function UsersData() {
  const { id } = useParams();

  const context = useContext(GlobalContext);

  const { getUsersById, usersId } = context;

  useEffect(() => {
    getUsersById(id);
  }, []);

  console.log(usersId);

  return (
    <>
      <UsersCard
        name={usersId.name}
        user={usersId.username}
        email={usersId.website}
        phone={usersId.phone}
      />
    </>
  );
}
