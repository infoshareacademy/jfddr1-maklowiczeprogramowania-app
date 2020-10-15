import React from "react";
import styled from "styled-components";
import TeamImageSrc from "../img/team.svg";
import MainWelcomePageLightBackgroundSrc from "../img/background-vector-left.svg";

const MainWelcomePageContent = styled.main`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  background: #f5f7f7;
  justify-content: center;
  flex-direction: column;
`;
const MainWelcomePageTeamImage = styled.img`
  height: 10em;
  margin: 8em auto;
  width: 10em;
  z-index: 1;
`;
const MainWelcomePageLightBackground = styled.img`
  position: absolute;
  left: 0;
  width: 12em;
  z-index: 0;
`;
const MainWelcomePageArticle = styled.article`
  border: 1px solid red;
  margin: 0 auto;
  color: #2b2b3f;
  // position:absolute;
  width: 15em;
  
`;

const ArticleTemplate = ({ headingText, articleText }) => {
  return (
    <MainWelcomePageArticle>
      <h4>{headingText}</h4>
      <p>{articleText}</p>
    </MainWelcomePageArticle>
  );
};

const MainWelcomePage = () => {
  return (
    <>
      <MainWelcomePageContent>
        <MainWelcomePageTeamImage src={TeamImageSrc} />
        {/* <MainWelcomePageLightBackground src = {MainWelcomePageLightBackgroundSrc}/> */}
        <ArticleTemplate
          headingText={"Stwórz drużynę"}
          articleText={
            "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Vivamus sollicitudin felis at."
          }
        />
        <ArticleTemplate
          headingText={"Realizuj swoje pomysły z innymi"}
          ArticleText={
            "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Vivamus sollicitudin felis at."
        }
        />
        <ArticleTemplate
          headingText={"Wyrusz w przygodę"}
          articleText={
            "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Vivamus sollicitudin felis at."
          }
        />
        <ArticleTemplate
          headingText={"Sprawdź się wboju"}
          articleText={
            "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Vivamus sollicitudin felis at."
          }
        />
        <ArticleTemplate
          headingText={"Zbieraj doświadczenie"}
          articleText={
            "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Vivamus sollicitudin felis at."
          }
        />
        <ArticleTemplate
          headingText={"Awansuj na nowe poziomy"}
          articleText={
            "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Vivamus sollicitudin felis at."
          }
        />
      </MainWelcomePageContent>
    </>
  );
};

export default MainWelcomePage;
