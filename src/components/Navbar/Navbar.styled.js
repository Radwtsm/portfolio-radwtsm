import styled from "styled-components";

const StyledNavbar = styled.nav`

background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 6px );
-webkit-backdrop-filter: blur( 6px );



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
    color: ;
    text-decoration: none;
  }

  a::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 0.3rem;
    top: 1.5rem;
    left: 0;
    background-color: ${({ theme }) => theme.colors.accent};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
`;

export default StyledNavbar;
