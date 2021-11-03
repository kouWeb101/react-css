import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <Container>
      <p>- Styled Components -</p>
      <button>Fight</button>
    </Container>
  );
};

const Container = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  margin: 8px;
  padding: 8px;
`;
