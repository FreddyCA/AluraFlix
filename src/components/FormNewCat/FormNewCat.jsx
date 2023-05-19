import styled from "styled-components";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import Button from "../Button/Button";

const FormNewCatStyle = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ButtonsContainerStyle = styled.div`
  width: 100%;
  display: flex;
  gap: 40px;
`;

const FormNewCat = () => {
  return (
    <FormNewCatStyle>
      <Input titulo="Nombre" error="Es obligatorio"></Input>
      <Textarea titulo="Descripcion" error="Es obligatorio"></Textarea>
      <Input titulo="Color" error="Es obl"></Input>
      <Input titulo="Código de seguridad" error="Es olb"></Input>
      <ButtonsContainerStyle>
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
      </ButtonsContainerStyle>
    </FormNewCatStyle>
  );
};

export default FormNewCat;
