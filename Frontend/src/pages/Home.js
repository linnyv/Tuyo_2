import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: 84a3eb;
  }
`;

const StyleCasa = styled.div`
  text-align: center;
  padding: 15px;
  border: 20px solid #fbe265;
  border-radius: 10px;
  position: relative;
  display: inline-flexbox;

  h1 {
    font-size: 40px;
    color: #3b4cca;
    font-family: "Special", sans-serif;
    margin-bottom: 10px;
  }

  @font-face {
    font-family: 'Special';
    src: url('../components/fonts/SpecialElite-Regular.ttf') format('truetype');
  }
  `;

export default function Home(props) {
    return (
      <>
        <GlobalStyle />
        <StyleCasa>
          <h1>TuYo</h1>
          <p>Sign Up! 
          </p>
          <p>Login!</p>
        </StyleCasa>
      </>
)};