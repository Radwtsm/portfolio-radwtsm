import styled from "styled-components";

const StyledFooter = styled.div`
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.accent};
  color: white;

  p {
    margin-top: 5%;
  }
`;

export default StyledFooter;
