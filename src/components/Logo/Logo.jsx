import styled from "styled-components";
import PropTypes from "prop-types";
import logo from "../../assets/LogoAluraFlix.png";

const LogoStyle = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height}
`;

const Logo = ({ width, height }) => {
  return <LogoStyle src={logo} width={width} height={height}></LogoStyle>;
};

Logo.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default Logo;
