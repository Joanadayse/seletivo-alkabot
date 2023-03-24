import styled from "styled-components";

export const ContainerCards = styled.div`
  padding: 50px;
  background-color:#F7F7F7;
  width: 40%;
  margin: 10px;
  margin-left: 30%;
  margin-top: 10%;
  transform-style: preserve-3d;
  border-radius: 20px;
  opacity: 0.7;
  filter: drop-shadow(0 0 0.4em black);
  /* border: 1px solid #000; */

  :hover {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
 
`;

export const Imagem = styled.img`
  width: 103px;
  height: 103px;
  position: absolute;
  top: -60px;
  /* right: -5; */
  z-index: 2;
`;
