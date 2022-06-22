import styled from "styled-components";

const StyledHeader = styled.header`

  border-radius:
  background-color: ${({ theme }) => theme.colors.accent};
  color: #fffffe;
  text-align: center;

  p {
    font-weight: bold;
    font-size: 4rem;
  }

  p:nth-child(2) {
    font-weight: bold;
    font-size: 2rem;
  }
`;
export default StyledHeader;
