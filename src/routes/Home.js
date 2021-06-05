import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import Movie from "../components/Movie";

const GET_MOVIES = gql`
  {
    movies {
      id
      title
      medium_cover_image
      isLiked @client
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: 'Raleway', sans-serif;
  background-color: rgba(4,15,52,1);
`;
const Header = styled.header`
  color: lightyellow;
  background-color: rgba(4,15,52,1);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 100px;
`;
const Title = styled.div`
  font-size: calc(100vw / 12);
  font-family: 'Lobster', cursive;
  display: flex;
  flex-direction: row;
`;
const Footer = styled.div`
  opacity: 0.2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 60px;
`;
const T = styled.div`
  margin: 0;
  padding: 0;
`;
const Subtitle = styled.div`
  font-family: 'Oswald', sans-serif;
  font-size: calc(100vw / 30);
`;
const Desc = styled.div`
  font-size: calc(100vw / 40);
`;
const Loading = styled.div`
  font-size: 30px;
  color: white;
  text-align: center;
  width: 100%;
  height: 100vh;
`;
const MoviesCon = styled.div`
  background: rgb(4,15,52);
  background: linear-gradient(rgba(4,15,52,1) 0%, rgba(182,199,255,1) 100%);
`;
const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 25px;
  width: 80%;
  position: relative;
  padding-bottom: 200px;
  margin: 0px auto 0px auto;
`;
export default () => {
  const { loading, data } = useQuery(GET_MOVIES);
  return (
    <Container>
      <Header>
        <Title>
            <T>A</T>
            <T>P</T>
            <T>O</T>
            <T>L</T>
            <T>L</T>S
            <T>O M</T>
            OVIES</Title>
        <Subtitle>please click the "Like" button if you like that movie!</Subtitle>
        <Desc>yunaisme made with nomad coder's help</Desc>
      </Header>
      {loading && <Loading>Loading...</Loading>}
      {!loading && <MoviesCon>
        <Movies>
            {data?.movies?.map(m => (
            <Movie
                key={m.id}
                id={m.id}
                isLiked={m.isLiked}
                bg={m.medium_cover_image}
                title={m.title}
            />
            ))}
        </Movies>
        <Footer>
          <Title>
              <T>A</T>
              <T>P</T>
              <T>O</T>
              <T>L</T>
              <T>L</T>S
              <T>O M</T>
              OVIES</Title>
        </Footer>
      </MoviesCon>}
    </Container>
  );
};