import { useContext } from "react";
import Cards from "../../components/CardPage/Cards";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { GlobalContext } from "../../context/GlobalContext";

import { ContainerHome } from "./styled";

export default function HomePage() {
  const context = useContext(GlobalContext);
  const {posts} = context;
  // console.log(posts)
  return (
    <ContainerHome>
      <Header />

      {posts.map((post) => {
        return (
          <Cards
            key={post.id}
            title={post.title}
            body={post.body}
            id={post.id}
          />
        );
      })}
      <Footer />
    </ContainerHome>
  );
}
