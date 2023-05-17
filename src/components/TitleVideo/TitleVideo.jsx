import styled from "styled-components";
import PropTypes from "prop-types";

const TitleVideoStyle = styled.h3`
  font-size: var(--font-size-titleMedium);
  color: var(--color-white);
  font-weight: 400;
`;

const TitleVideo = ({ titulo }) => {
  return <TitleVideoStyle>{titulo}</TitleVideoStyle>;
};

export default TitleVideo

TitleVideo.propTypes = {
  titulo: PropTypes.string.isRequired,
};
