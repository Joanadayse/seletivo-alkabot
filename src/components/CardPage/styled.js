import styled from "styled-components";

export const ContainerCards = styled.div`
  padding: 50px;
  background-color: #d4f1f4;
  width: 40%;
  margin: 10px;
  margin-left: 30%;
  margin-top: 10%;
  transform-style: preserve-3d;
  border-radius: 20px;

  color: #189ab4;

  font-family: "Poppins", sans-serif;

  filter: drop-shadow(0 0 0.4em #189ab4);

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

  z-index: 2;
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: larger;
  color: #05445e;
`;

export const Button = styled.button`
  font-family: "Poppins", sans-serif;
  border-style: none;
  cursor: pointer;
  align-items: center;
  padding: 10px;
  width: 200px;
  height: 40px;
  border-radius: 8px;
  font-style: normal;
  font-weight: 700;
  font-weight: bolder;
  background-color: #05445e;
  color: #d4f1f4;
`;
