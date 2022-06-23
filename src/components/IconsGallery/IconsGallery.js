import { StyledIconsGallery, StyledAlignment } from "./IconsGallery.styled";

const IconsGallery = (props) => {
  return (
    <StyledAlignment>
      <h2>{props.title}</h2>
      <StyledIconsGallery>
        {props.icon1}
        {props.icon2}
        {props.icon3}
        {props.icon4}
        {props.icon5}
      </StyledIconsGallery>
    </StyledAlignment>
  );
};

export default IconsGallery;
