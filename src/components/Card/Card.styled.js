import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 9%;

  margin: 5% 0px;

  font-size: ${({ theme }) => theme.fontsize.paragraph};

  h3 {
    font-size: ${({ theme }) => theme.fontsize.subtitle};
  }

  img {
    width: 50%;
  }
`;

export default StyledCard;
