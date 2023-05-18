import styled from "styled-components";
import Button from "../components/Button/Button";

const AddVideoStyle = styled.div`
  background-color: tomato;
`;

const AddVideo = () => {
  return (
    <AddVideoStyle>
      <Button
        backgroundColor="black"
        color="white"
        fontSize="20px"
        padding="15px 35px"
        texto="New Video"
        colorBorde="yellow"
      ></Button>

      <Button
        backgroundColor="yellow"
        color="black"
        fontSize="20px"
        padding="15px 35px"
        texto="Home"
        colorBorde="blue"
        url="/"
      ></Button>
    </AddVideoStyle>
  );
};

export default AddVideo;
