import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const TitleVideoStyle = styled.h3`
  font-size: var(--font-size-titleMedium);
  color: var(--color-white);
  font-weight: 400;
  @media screen and (max-width: 992px) {
    ${props => props.showcase && css`
    font-size: var(--font-size-titleSmall);
    font-weight: 300;
  `}
  }

  @media screen and (max-width: 768px) {
    ${props => props.showcase && css`
    font-size: var(--font-size-bodyBig);
    font-weight: 300;
  `}
  }
`;

const TitleVideo = ({ titulo, showcase }) => {
  return <TitleVideoStyle showcase={showcase}>{titulo}</TitleVideoStyle>;
};

export default TitleVideo

TitleVideo.propTypes = {
  titulo: PropTypes.string.isRequired,
  showcase: PropTypes.bool
};
