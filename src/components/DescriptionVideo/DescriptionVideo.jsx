import styled,  { css } from "styled-components";
import PropTypes from "prop-types";

const DescriptionVideoStyle = styled.p`
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