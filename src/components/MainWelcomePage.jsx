import React from "react";
import styled from "styled-components";
import TeamImageSrc from "../img/team.svg";
import SecurityImageSrc from "../img/Security.svg";
import AchievementImageSrc from "../img/Achievement.svg";
import MainWelcomePageLightBackgroundSrc from "../img/background-vector-left.svg";
import MainWelcomePageLightRightBackgroundSrc from "../img/background-vector-right.svg";
import MainWelcomePageLightLeftBackgroundSrc from "../img/background-vector-left-2.svg";
import { getWelcomePageArticlesData } from "../mocks/WelcomePageArticlesData.js";

const MainWelcomePageContent = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background: #f5f7f7;
`;

const MainWelcomePageLightBackground = styled.img`
  position: absolute;
  top: 3%;
  left: 0;
  z-index: 0;
  width: 16em;
  @media (min-width: 768px) {
    width: 25em;
  }
`;

const MainWelcomePageLightRightBackground = styled(
  MainWelcomePageLightBackground
)`
  top: 30%;
  left: auto;
  right: 0;
  width: 17em;

  @media (min-width: 768px) {
    width: 25em;
  }
`;

const MainWelcomePageLightLeftBackground = styled(
  MainWelcomePageLightBackground
)`
  top: 70%;
  width: 15em;

  @media (min-width: 768px) {
    width: 25em;
    top: 60%;
  }
`;

const MainWelcomePageArticle = styled.article`
  z-index: 2;
  margin: 2em auto;
  color: #2b2b3f;
`;

const WelcomePageImageComponent = styled.img`
  z-index: 1;
  width: 15em;
  margin: 5em auto 5em auto;
`;

const HeadingText = styled.h4`
  text-align: center;
  margin: 0.5em 0;
  font-size: 1.5rem;
  font-weight: 600;
  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const ArticleText = styled.p`
  text-align: center;
  width: 20em;
  padding: 0 2em;
  margin: 0;
  font-size: 1.1rem;
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const WelcomePageImage = ({ src }) => {
  return <WelcomePageImageComponent src={src} />;
};

const ArticleTemplate = ({ headingText, articleText }) => {
  return (
    <MainWelcomePageArticle>
      <HeadingText>{headingText}</HeadingText>
      <ArticleText>{articleText}</ArticleText>
    </MainWelcomePageArticle>
  );
};

const MainWelcomePage = () => {
  const articlesData = getWelcomePageArticlesData();
  const articleComponents = articlesData.map(
    ({ articleHeading, articleText }) => {
      return (
        <ArticleTemplate
          key={articleHeading}
          headingText={articleHeading}
          articleText={articleText}
        />
      );
    }
  );
  return (
    <>
      <MainWelcomePageContent>
        <MainWelcomePageLightBackground
          src={MainWelcomePageLightBackgroundSrc}
        />

        <WelcomePageImage src={TeamImageSrc} />
        {articleComponents[0]}
        {articleComponents[1]}
        <MainWelcomePageLightRightBackground
          src={MainWelcomePageLightRightBackgroundSrc}
        />
        <WelcomePageImage src={SecurityImageSrc} />
        {articleComponents[2]}
        {articleComponents[3]}
        <MainWelcomePageLightLeftBackground
          src={MainWelcomePageLightLeftBackgroundSrc}
        />
        <WelcomePageImage src={AchievementImageSrc} />
        {articleComponents[4]}
        {articleComponents[5]}
      </MainWelcomePageContent>
    </>
  );
};

export default MainWelcomePage;
