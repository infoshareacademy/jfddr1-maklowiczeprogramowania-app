import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import ImageSrc from "../img/add-project-idea-image.svg";
import { StyledSmallButton } from "../components/buttons/SmallButton";
import AddProjectTemplateView from "./AddProjectTemplateView";

const Image = styled.img`
  width: 15em;
  background: var(--dark-clr);

  @media (min-width: 600px) {
    width: 20em;
  }

  @media (min-width: 1024px) {
    width: 25em;
  }
`;

const MainHeading = styled.h1`
  font-size: 1.8rem;
  color: var(--light-clr);
  @media (min-width: 600px) {
    font-size: 2.1rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.8rem;
  }
`;

const Paragraph = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: 0.5em;
  @media (min-width: 600px) {
    padding: 0 3em;
    font-size: 1.1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.6rem;
    padding: 0 6em;
  }
`;

const Button = styled(StyledSmallButton)`
  background-color: var(--light-clr);
  color: var(--dark-clr);
  width: 8em;
  margin: 2em 0.5em 0 0.5em;

  @media (min-width: 1024px) {
    width: 10em;
    font-size: 1.2rem;
  }
`;
const AddProjectView0 = () => {
  return (
    <>
      <AddProjectTemplateView
        children={
          <>
            <Image src={ImageSrc} />
            <MainHeading>Kreator projektu</MainHeading>
            <Paragraph>
              Zamierzasz stworzyć projekt? Świetnie! Przeprowadzimy Cię teraz
              przez kreator projektu, który pozwoli dodać Twój projekt w kilku
              prostych krokach!{" "}
            </Paragraph>
            <Link to="/pages/AuthWelcomeView">
              <Button>Cofnij</Button>
            </Link>
            <Link to="/pages/AddProjectView1">
              <Button>Tworzę projekt</Button>
            </Link>
          </>
        }
      ></AddProjectTemplateView>
    </>
  );
};

export default AddProjectView0;
