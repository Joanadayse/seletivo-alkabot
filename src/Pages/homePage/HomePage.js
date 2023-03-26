import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { ContainerHome } from "./styled";

import Cards from "../../components/CardPage/Cards";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";


export default function HomePage() {
  const context = useContext(GlobalContext);
  const { posts } = context;

  const allPosts = posts.map((post) => {
    return (
      <Cards key={post.id} title={post.title} body={post.body} id={post.id} />
    );
  });

  return (
    <ContainerHome>
      <Header />

      {allPosts}

      <Footer />
    </ContainerHome>
  );
}
