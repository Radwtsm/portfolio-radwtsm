import styled from "styled-components";

const StyledIconsGallery = styled.div`
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 9%;

  margin: 5% 0px;
  display: flex;

  align-items: center;
  justify-content: center;

  img {
    width: 30%;
    margin: 0px 4%;
  }
  svg {
    width: 30%;
    margin: 0px 4%;
  }
`;

const StyledAlignment = styled.div`
  h2 {
    font-size: ${({ theme }) => theme.fontsize.subtitle};
    font-weight: bolder;
    margin: 3% 0px;
  }

  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export { StyledIconsGallery, StyledAlignment };
