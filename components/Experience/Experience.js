import React from "react";
import { ExperienceContainer } from "./Experience.styles";
function Experience(props, ref) {
  return (
    <ExperienceContainer id={props.id} ref={ref}>
      <h2 className="title-count">Experiences</h2>
    </ExperienceContainer>
  );
}

export default React.forwardRef(Experience);
