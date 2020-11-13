import React, { useState } from "react";
import MediaQuery from "react-responsive";
import { useAuth } from "../contexts/AuthContext";
import { useProject } from "../contexts/ProjectsContext";
import { useHistory } from "react-router-dom";
import { fieldTagsDB } from "../mocks/FieldTagsData.js";
import AddProjectViewTemplate from "../components/templates/AddProjectViewTemplate";
import AuthDesktopTemplate, {
  AuthDesktopMain,
} from "../components/templates/AuthDesktopTemplate";
import {
  Button,
  SelectButton,
  GreyishTextArea,
  Label,
  LabelInputWrapper,
  StyledSelect,
  TagContainer,
  FormWrapper,
  GreyishInput,
} from "../components/AddProjectViewElements";

const SpecSelect = ({ name, tags, setTags }) => {
  const [tagsState, setTagsState] = useState();
  const [disabled, setDisabled] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    tags = tagsState.map((el) => el.label);
    setTags(tags);
    setDisabled(true);
  };
  return (
    <>
      <StyledSelect
        isMulti={true}
        placeholder="Wybierz tagi..."
        name={name}
        options={fieldTagsDB}
        onChange={setTagsState}
        isDisabled={disabled}
      />
      <SelectButton type="button" name={name} onClick={handleClick}>
        Zatwierdź
      </SelectButton>
    </>
  );
};

const AddProjectView1 = () => {
  const history = useHistory();
  const { setProject } = useProject();
  const { currentUserData, currentUser } = useAuth();
  const [tags, setTags] = useState([]);

  const titleRef = React.createRef();
  const fileRef = React.createRef();
  const descriptionRef = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    let title = titleRef.current.value;
    let file = fileRef.current.value;
    let description = descriptionRef.current.value;
    const userFirebaseId = currentUser.uid;
    setProject({
      title,
      file,
      description,
      tags,
      author: { ...currentUserData, userFirebaseId },
    });
    history.push("/pages/AddProjectView2");
  };

  return (
    <>
      <MediaQuery minDeviceWidth={1024}>
        <AuthDesktopTemplate>
          <AuthDesktopMain
            heading={"Dodaj podstawowe informacje"}
            sectionSubtitle={"Opisz swój projekt"}
            step={"Krok 1 z 4"}
            children={
              <FormWrapper onSubmit={handleSubmit}>
                <LabelInputWrapper>
                  <Label>Tytuł</Label>
                  <GreyishInput
                    ref={titleRef}
                    id={"title"}
                    name={"title"}
                    type={"text"}
                    required
                  />
                </LabelInputWrapper>
                <LabelInputWrapper>
                  <Label>Grafika projektu</Label>
                  <GreyishInput
                    ref={fileRef}
                    id={"upload"}
                    name={"upload"}
                    type={"file"}
                    accept={"image/png, image/jpeg"}
                  />
                </LabelInputWrapper>
                <LabelInputWrapper>
                  <Label>Opis projektu</Label>
                  <GreyishTextArea
                    ref={descriptionRef}
                    id={"description"}
                    name={"description"}
                    type={"text"}
                    required
                  />
                </LabelInputWrapper>

                <TagContainer>
                  <SpecSelect tags={tags} setTags={setTags} />
                </TagContainer>

                <Button type="submit">Dalej</Button>
              </FormWrapper>
            }
          />
        </AuthDesktopTemplate>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1024}>
        <AddProjectViewTemplate
          heading={"Dodaj podstawowe informacje"}
          sectionSubtitle={"Opisz swój projekt"}
          children={
            <>
              <FormWrapper>
                <LabelInputWrapper>
                  <Label>Tytuł</Label>
                  <GreyishInput required type="password" />
                </LabelInputWrapper>
                <LabelInputWrapper>
                  <Label>Grafika projektu</Label>
                  <GreyishInput required />
                </LabelInputWrapper>
                <LabelInputWrapper>
                  <Label>Opis projektu</Label>
                  <GreyishTextArea required />
                </LabelInputWrapper>
              </FormWrapper>

              <Button>Dalej</Button>
            </>
          }
        ></AddProjectViewTemplate>
      </MediaQuery>
    </>
  );
};

export default AddProjectView1;
