import styled from "styled-components";

const StyledButton = styled.div`
  .button {
    background-color: ${({ theme }) => theme.colors.main};
    color: rgba(255, 255, 255, 0.18);
    margin: 10% auto;
    border: 3px solid rgba(255, 255, 255, 0.18);
    text-align: center;
    border-radius: 30px;
    width: 60%;
    padding: 5%;
  }

  .button:hover {
    color: white;
    border-color: white;
  }
`;

export default StyledButton;
