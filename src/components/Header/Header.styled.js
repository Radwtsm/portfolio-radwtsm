import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.background};
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
