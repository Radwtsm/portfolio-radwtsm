import styled from "styled-components";

const StyledHeader = styled.header`
  border: 1px solid rgba(255, 255, 255, 0.18);

  padding: 30px;

  background-color: ${({ theme }) => theme.colors.accent};
  color: #fffffe;
  text-align: center;

  p {
    font-family: "Merriweather", serif;

    font-size: ${({ theme }) => theme.fontsize.header};
  }

  p:nth-child(1) {
    font-family: "Oswald", sans-serif;
    font-weight: 500;
  }

  p:nth-child(2) {
    font-size: ${({ theme }) => theme.fontsize.subtitle};
  }

  p:nth-child(3) {
    font-size: ${({ theme }) => theme.fontsize.subtitle};
  }
`;
export default StyledHeader;
