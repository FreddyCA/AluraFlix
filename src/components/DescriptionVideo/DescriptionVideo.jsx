import styled from "styled-components";
import PropTypes from "prop-types";

const DescriptionVideoStyle = styled.p`
  font-size: var(--font-size-bodyMedium);
  color: var(--color-white);
`;

const DescriptionVideo = ({ descripcion }) => {
  return <DescriptionVideoStyle>{descripcion}</DescriptionVideoStyle>;
};

export default DescriptionVideo

DescriptionVideo.propTypes = {
  descripcion: PropTypes.string.isRequired,
};