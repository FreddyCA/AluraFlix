import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonStyle = styled.button`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border: none;
  border: 1px solid ${(props) => props.colorBorde};
  font-size: ${(props) => props.fontSize};
  border-radius: 4px;
  padding: ${(props) => props.padding};
  white-space: nowrap;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.color};
    color: ${(props) => props.backgroundColor};
  }
`;

const Button = ({
  backgroundColor,
  color,
  colorBorde = "none",
  fontSize,
  padding,
  texto,
}) => {
  return (
    <ButtonStyle
      backgroundColor={backgroundColor}
      color={color}
      colorBorde={colorBorde}
      fontSize={fontSize}
      padding={padding}
    >
      {texto}
    </ButtonStyle>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  colorBorde: PropTypes.string,
  fontSize: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  padding: PropTypes.string.isRequired,
};

export default Button;
