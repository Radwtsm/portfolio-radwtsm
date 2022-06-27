import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fontsize.subtitle};
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 6%;

  margin: 8% 0px;
`;

export default Flex;
