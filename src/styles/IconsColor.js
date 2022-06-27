import styled from "styled-components";

const StyledIconsColor = styled.div`
  text-align: center;

  color: white;

  h2 {
    font-size: ${({ theme }) => theme.fontsize.subtitle};
    font-weight: 700;
    margin-top: 8%;
    margin-bottom: 2%;
  }

  h3 {
  }

  svg {
    width: 40%;
  }
`;

export default StyledIconsColor;
