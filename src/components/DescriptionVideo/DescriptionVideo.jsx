import styled,  { css } from "styled-components";
import PropTypes from "prop-types";

const DescriptionVideoStyle = styled.p`
overflow-y: auto;
scrollbar-width: thin;
scrollbar-color: transparent transparent;
height: 4rem;

&::-webkit-scrollbar {
  width: 5px;
}

&::-webkit-scrollbar-track {
  background-color: transparent;
}

&::-webkit-scrollbar-thumb {
  background-color: transparent;
}

  font-size: var(--font-size-bodyMedium);
  color: var(--color-white);
  @media screen and (max-width: 992px) {
    ${props => props.showcase && css`
    font-size: var(--font-size-bodySmall);
    font-weight: 300;
  `}
  }

  @media screen and (max-width: 768px) {
    ${props => props.showcase && css`
    font-size: var(--font-size-bodySmaller);
  `}
  }
`;

const DescriptionVideo = ({ descripcion,showcase  }) => {
  return <DescriptionVideoStyle showcase={showcase}>{descripcion}</DescriptionVideoStyle>;
};

export default DescriptionVideo

DescriptionVideo.propTypes = {
  descripcion: PropTypes.string.isRequired,
  showcase: PropTypes.bool
};