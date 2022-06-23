import styled from "styled-components";

const StyledTextSection = styled.div`
  margin: 10% 0px;

  h2 {
    text-align: center;
    font-family: "Oswald", sans-serif;
    color: white;
    font-size: ${({ theme }) => theme.fontsize.subtitle};
  }

  p {
    color: white;
    font-size: ${({ theme }) => theme.fontsize.paragraph};
  }
`;

export default StyledTextSection;
