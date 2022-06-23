import StyledWhoAmI from "./WhoAmI.styled";
import StyledTextSection from "../TextSection/TextSection.styled";

const WhoAmI = (props) => {
  return (
    <StyledWhoAmI>
      <img alt="2d profile graphic" src={props.src} />
      <StyledTextSection>
        <h2>{props.title}</h2>
        <p>{props.paragraph}</p>
      </StyledTextSection>
    </StyledWhoAmI>
  );
};

export default WhoAmI;
