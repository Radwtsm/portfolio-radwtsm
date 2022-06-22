import StyledTextSection from "./TextSection.styled"

const TextSection = (props) => {
    return <StyledTextSection>
    <h2>{props.title}</h2>
    <p>{props.paragraph}</p>

    </StyledTextSection> 
}

export default TextSection;