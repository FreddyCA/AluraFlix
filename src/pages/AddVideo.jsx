import styled from "styled-components";
import Button from "../components/Button/Button";
import TitleVideo from "../components/TitleVideo/TitleVideo";
import Form from "../components/Form/Form";

const AddVideoStyle = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 50px 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;

const AddVideo = () => {
  return (
    <AddVideoStyle>
      <TitleVideo titulo="Nuevo Video"></TitleVideo>
      <Button
        backgroundColor="yellow"
        color="black"
        fontSize="20px"
        padding="15px 35px"
        texto="Home"
        colorBorde="blue"
        url="/"
      ></Button>
      <Form></Form>
    </AddVideoStyle>
  );
};

export default AddVideo;
