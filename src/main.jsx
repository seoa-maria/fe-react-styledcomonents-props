import React from "react";
import Box from "./components/box";
import Circle from "./components/circle";
import styled from "styled-components";
import Card from "./components/card";

const Circlediv = styled.div`
  flex-direction: "row";
`;

const Main = () => {
  const circleColorArr = [
    "pink",
    "red",
    "black",
    "gray",
    "green",
    "blue",
    "orange",
  ];

  return (
    <>
      <Box boxColor="red" text="hi" />
      <Box boxColor="blue" text="hello" />
      <Box boxColor="green" text="bye" />
      <Box boxColor="pink" text="goodbye" />

      <Circlediv>
        <Circle circleColor="pink" />
        <Circle circleColor="red" />
        <Circle circleColor="black" />
        <Circle circleColor="gray" />
        <Circle circleColor="green" />
        <Circle circleColor="blue" />
        <Circle circleColor="orange" />
      </Circlediv>

      <br></br>

      <Card
        url="t.png"
        title="터키"
        content="카파도키아, 열기구 체험과 아름다운 풍경"
      />
      <Card
        url="i.png"
        title="인도"
        content="타지마할, 거대함 속에 숨겨진 사랑 이야기"
      />
      <Card
        url="e.png"
        title="이집트"
        content="피라미드, 자연과 인간의 위대함이 느껴지는 곳"
      />
      <Card
        url="p.png"
        title="페루"
        content="마추픽추, 자연의 거대함과 고대 도시 이야기"
      />
      <Card url="pp.png" title="프랑스" content="파리, 우연도 인연이 되는 곳" />
    </>
  );
};

export default Main;
