import styled from "styled-components";
import PropTypes from "prop-types";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import Button from "../Button/Button";
import ListCat from "../ListCat/ListCat";

const FormStyle = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ButtonsContainerStyle = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: space-between;
`;
const ButtonsFormStyle = styled.div`
  display: flex;
  gap: 40px;
`;

const Form = ({ categorias }) => {
  return (
    <FormStyle>
      <Input titulo="Título" error="Es obligatorio"></Input>
      <Input titulo="Link video" error="Es obligatorio"></Input>
      <Input titulo="Link imagen" error="Es obligatorio"></Input>

      <ListCat categorias={categorias}></ListCat>

      <Textarea titulo="Descripción" error="Es obligatorio"></Textarea>
      <Input titulo="Codigo" error="Es obligatorio"></Input>
      <ButtonsContainerStyle>
        <ButtonsFormStyle>
          <Button
            backgroundColor="var(--color-primario)"
            color="var(--color-white)"
            fontSize="var(--font-size-bodyMedium)"
            padding="18px 55px"
            texto="Guardar"
          ></Button>
          <Button
            backgroundColor="var(--color-blackTenue)"
            color="var(--color-black)"
            fontSize="var(--font-size-bodyMedium)"
            padding="18px 55px"
            texto="Limpiar"
          ></Button>
        </ButtonsFormStyle>
        <Button
          backgroundColor="var(--color-primario)"
          color="var(--color-white)"
          fontSize="var(--font-size-bodyMedium)"
          padding="18px 55px"
          texto="Nueva Categoría"
          url="/newcat"
        ></Button>
      </ButtonsContainerStyle>
    </FormStyle>
  );
};

Form.propTypes = {
  categorias: PropTypes.object.isRequired,
};

export default Form;
