import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  min-width: 100vw;
  min-height: 100vh;
  background: #2b2b3f;
  text-align: center;
  overflow-x: hidden;
  @media (min-width: 1024px) {
    justify-content: space-between;
  }
`;

export default Wrapper;
