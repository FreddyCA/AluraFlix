import styled from "styled-components";
import PropTypes from "prop-types";

const InputContainerStyle = styled.div`
  background-color: var(--color-blackClaro);
  border-radius: 4px;
  padding: 9px;
  display: flex;
  flex-direction: column;
`;

const InputTitleStyle = styled.span`
  background-color: transparent;
  color: var(--color-grayMedium);
  font-size: var(--font-size-bodySmaller);
  font-weight: 300;
`;

const InputValueStyle = styled.input`
  background-color: transparent;
  color: var(--color-grayClaro);
  font-size: var(--font-size-bodyMedium);
  border: none;
  outline: none;
`;

const InputErrorStyle = styled.span`
  color: var(--color-errorMedium);
  font-size: var(--font-size-bodySmaller);
  margin: 4.5px 4.5px 1.5rem;
`;

const Input = ({ titulo, error }) => {
  return (
    <>
      <InputContainerStyle>
        <InputTitleStyle>{titulo}</InputTitleStyle>
        <InputValueStyle value={"aaaaaaaaa "}></InputValueStyle>
      </InputContainerStyle>
      <InputErrorStyle>{error}</InputErrorStyle>
    </>
  );
};

Input.propTypes = {
  titulo: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};

export default Input;
