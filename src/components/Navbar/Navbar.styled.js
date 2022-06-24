import styled from "styled-components";

const StyledNavbar = styled.nav`
  position: sticky;
  top: 0;

  background-color: ${({ theme }) => theme.colors.main};
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  height: 4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  a.active::before {
    transform: scaleX(2);
  }

  a {
    position: relative;

    text-decoration: none;
  }

  a::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 0.3rem;
    top: 1.8rem;
    left: 0;
    background-color: ${({ theme }) => theme.colors.accent};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
`;

export default StyledNavbar;
