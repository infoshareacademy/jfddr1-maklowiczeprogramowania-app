import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import ImageSrc from "../img/add-project-idea-image.svg";
import { StyledSmallButton } from "../components/SmallButton";
import AddProjectTemplateView from "./AddProjectTemplateView";

const Image = styled.img`
  width: 15em;
  background: var(--dark-clr);
`;

const MainHeading = styled.h1`
  font-size: 1.8rem;
  color: var(--light-clr);
`;

const Paragraph = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: 0.5em;
`;

const Button = styled(StyledSmallButton)`
  background-color: var(--light-clr);
  color: var(--dark-clr);
  width: 8em;
  margin: 2em 0.5em 0 0.5em;
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
            <Button>Cofnij</Button>
            <Button>Tworzę projekt</Button>
          </>
        }
      ></AddProjectTemplateView>
    </>
  );
};

export default AddProjectView0;
