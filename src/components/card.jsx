import React from "react";
import styled from "styled-components";

const BackGround = styled.div`
  text-align: center;
  width: 300px;
  height: 380px;
  margin: 10px;
  border-radius: 20px;
  background-color: #caf3a5;
  display: inline-block;
`;

const Image = styled.img`
  margin-top: 10px;
  width: 280px;
  height: 200px;
  border-radius: 20px;
  content: url(${(props) => props.url});
`;

const Title = styled.h1`
  margin-top: 1px;
  margin-left: 15px;
  margin-bottom: auto;
  text-align: left;
  color: black;
`;

const Content = styled.p`
  margin-top: 7px;
  margin-left: 20px;
  margin-right: 20px;
  text-align: left;
`;

const Button = styled.button`
  width: 90%;
  height: 12%;
  border: none;
  border-radius: 25px;
  margin-left: 8px;
  background: linear-gradient(to left, #0a522e, #1b6534);
  color: white;
`;
const Card = (props) => {
  return (
    <>
      <BackGround>
        <Image url={props.url} />
        <Title>{props.title}</Title>
        <Content>{props.content}</Content>
        <Button>관광 상품 알아보기</Button>
      </BackGround>
    </>
  );
};

export default Card;
