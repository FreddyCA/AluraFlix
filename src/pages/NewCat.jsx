import styled from "styled-components";
import FormNewCat from "../components/FormNewCat/FormNewCat";

const NewCatStyle = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 50px 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;

const NewCat = () => {
  return (
    <NewCatStyle>
      <FormNewCat></FormNewCat>
      
    </NewCatStyle>
  );
};

export default NewCat;
