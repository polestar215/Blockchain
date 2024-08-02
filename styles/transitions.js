import { css } from "styled-components";

export const transitionAll = `all 250ms cubic-bezier(0.645, 0.045, 0.355, 1)`;

export const transitionHamburger = {
  before: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
  beforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
  after: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  afterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`,
};

export const transitionSection = `opacity 0.5s cubic-bezier(0.34, -0.26, 0.2, 0.69) 0.2s, transform 0.5s cubic-bezier(0.34, -0.26, 0.2, 0.69) 0.2s`;

const transitionFunction = {
  transition_out_back: `cubic-bezier(0.18, 0.89, 0.32, 1.28)`,
  transition_ease: `cubic-bezier(0.645, 0.045, 0.355, 1)`,
  transition_in_sine: `cubic-bezier(0.47, 0, 0.75, 0.72)`,
  transition_out_cubic: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
};

export const transition = css`
  .fade-up-appear,
  .fade-up-enter {
    opacity: 0.01;
    transform: translateY(20px);
    transition: opacity 300ms ${transitionFunction.transition_ease},
      transform 300ms ${transitionFunction.transition_ease};
  }
  .fade-up-appear-active,
  .fade-up-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 300ms ${transitionFunction.transition_ease},
      transform 300ms ${transitionFunction.transition_ease};
  }
  .fade-down-appear,
  .fade-down-enter {
    opacity: 0.01;
    transform: translateY(-20px);
    transition: opacity 300ms ${transitionFunction.transition_ease},
      transform 300ms ${transitionFunction.transition_ease};
  }
  .fade-down-appear-active,
  .fade-down-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 300ms ${transitionFunction.transition_ease},
      transform 300ms ${transitionFunction.transition_ease};
  }
  .fade-appear,
  .fade-enter {
    opacity: 0.01;
    transition: opacity 500ms ${transitionFunction.transition_ease};
  }
  .fade-appear-active,
  .fade-appear-enter {
    opacity: 1;
    transition: opacity 500ms ${transitionFunction.transition_ease};
  }
`;
