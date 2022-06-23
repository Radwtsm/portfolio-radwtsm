import StyledCard from "./Card.styled";

const Card = (props) => {
  return (
    <StyledCard>
      <h3>{props.title}</h3>
      <img alt="logo of the project" src={props.img} />
      <p>{props.info}</p>
    </StyledCard>
  );
};

export default Card;
