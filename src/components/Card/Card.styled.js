import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 6%;

  margin: 8% 0px;

  font-size: ${({ theme }) => theme.fontsize.paragraph};

  color: white;

  h3 {
    margin-bottom: 6%;
    font-size: ${({ theme }) => theme.fontsize.subtitle};
    font-weight: 600;
  }

  p {
    margin-top: 6%;
  }
  img {
    border-radius: 10px;
    width: 100%;
  }
`;

export default StyledCard;
