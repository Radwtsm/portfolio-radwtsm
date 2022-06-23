import StyledCard from "./Card.styled";

const Card = (props) => {
  return (
    <a href={props.url} target="_blank" rel="noreferrer">
      <StyledCard>
        <h3>{props.title}</h3>
        <img alt="logo of the project" src={props.img} />
        <p>{props.info}</p>
      </StyledCard>
    </a>
  );
};

export default Card;
