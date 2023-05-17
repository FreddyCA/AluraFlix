import styled from "styled-components";

const ButtonOpenAllStyle = styled.button`
  background-color: var(--color-blackClaro);
  font-size: var(--font-size-bodyMedium);
  border: none;
  height: fit-content;
  border: 1px solid var(--color-white);
  color: var(--color-white);
  padding: 1rem 2rem;
  border-radius: 4px;
  cursor: pointer;
box-sizing: border-box;
  &:hover {
    background-color: var(--color-black);
    color: var(--color-white);
  }
`;

const ButtonOpenAll = () => {
  return <ButtonOpenAllStyle>Ver Todo</ButtonOpenAllStyle>;
};

export default ButtonOpenAll
