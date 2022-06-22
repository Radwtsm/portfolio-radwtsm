import styled from "styled-components";

const StyledHeader = styled.header`

background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 6px );
-webkit-backdrop-filter: blur( 6px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );


  padding:30px;
  margin: 30px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.accent};
  color: #fffffe;
  text-align: center;

  p {
    font-family: 'Merriweather', serif;

    font-size: 4rem;
  }

  p:nth-child(1) {
    font-family: 'Oswald', sans-serif;
    font-weight:500;
  }

  p:nth-child(2) {
    
    font-size: 2rem;
  }

  p:nth-child(3) {
    font-size:1.9rem;
  }
`;
export default StyledHeader;
