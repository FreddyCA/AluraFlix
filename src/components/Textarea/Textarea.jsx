import styled from "styled-components";
import PropTypes from "prop-types";

const TextareaContainerStyle = styled.div`
  background-color: var(--color-blackClaro);
  border-radius: 4px;
  padding: 9px;
  display: flex;
  flex-direction: column;
`;
const TextareaTitleStyle = styled.span`
  color: var(--color-grayMedium);
  font-size: var(--font-size-bodySmaller);
  font-weight: 300;
`;

const TextareaValueStyle = styled.textarea`
  background-color: transparent;
  color: var(--color-grayClaro);
  font-size: var(--font-size-bodyMedium);
  border: none;
  outline: none;
  resize: none;
  height: 6.55rem;
`;

const TextareaErrorStyle = styled.span`
  color: var(--color-errorMedium);
  font-size: var(--font-size-bodySmaller);
  margin: 4.5px 4.5px 1.5rem;
`;

const Textarea = ({ titulo, error }) => {
  return (
    <>
      <TextareaContainerStyle>
        <TextareaTitleStyle>{titulo}</TextareaTitleStyle>
        <TextareaValueStyle value={"aaa"}></TextareaValueStyle>
      </TextareaContainerStyle>
      <TextareaErrorStyle>{error}</TextareaErrorStyle>
    </>
  );
};

Textarea.propTypes = {
  titulo: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};

export default Textarea;
