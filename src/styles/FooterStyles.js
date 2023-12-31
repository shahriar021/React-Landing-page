// components/FooterStyles.js

import styled from "styled-components";

export const Box = styled.div`
  padding: 1% 3.5%;
  background: white;

  bottom: 0;
  width: 100%;
  border: 1px solid black;
  @media (max-width: 1000px) {
    // padding: 70px 30px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  // margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 40px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: black;
  margin-bottom: 10px;
  font-size: 12px;
  text-decoration: none;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 18px;
  color: black;
  margin-bottom: 0px;
  font-weight: bold;
`;
