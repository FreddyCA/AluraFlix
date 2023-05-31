import styled from "styled-components";
import PropTypes from "prop-types";

const ListCatContainerStyle = styled.div`
  background-color: var(--color-blackClaro);
  border-radius: 4px;
  padding: 9px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 2rem;
`;

const ListCatTitleStyle = styled.span`
  background-color: transparent;
  color: var(--color-grayMedium);
  font-size: var(--font-size-bodySmaller);
  font-weight: 300;
`;

const ListCatStyle = styled.select`
  background-color: var(--color-blackMedium);
  color: var(--color-grayMedium);
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 4px;
`;
const OptionStyle = styled.option`
  background-color: var(--color-blackTenue);
  color: var(--color-black);
`;

const ListCat = ({ categorias }) => {
  return (
    <ListCatContainerStyle>
      <ListCatTitleStyle>Categoría</ListCatTitleStyle>
      <ListCatStyle>
        {Object.entries(categorias).map(([key, { value, label }]) => (
          <OptionStyle key={key} value={value}>
            {label}
          </OptionStyle>
        ))}
      </ListCatStyle>
    </ListCatContainerStyle>
  );
};

ListCat.propTypes = {
  categorias: PropTypes.object.isRequired,
};

export default ListCat;
