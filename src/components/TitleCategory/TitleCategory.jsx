import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const TitleCategoryStyle = styled.h2`
  color: var(--color-white);
  background-color: ${(props) => props.backgroundColor};
  font-size: ${(props) => props.fontSize};
  padding: 14px 10px;
  border-radius: 4px;
  font-weight: 400;
  white-space: nowrap;
  width: fit-content;
  ${props => props.showcase && css`
    margin-bottom: 2rem;
  `}

  @media screen and (max-width: 992px) {
    ${props => props.showcase && css`
    font-size: var(--font-size-titleMedium);
  `}
  }
  @media screen and (max-width: 768px) {
    ${props => props.showcase && css`
    font-size: var(--font-size-titleSmall);
  `}
  }
`;

const TitleCategory = ({ texto, backgroundColor, fontSize, showcase }) => {
  return (
    <TitleCategoryStyle backgroundColor={backgroundColor} fontSize={fontSize} showcase={showcase}>
      {texto}
    </TitleCategoryStyle>
  );
};

TitleCategory.propTypes = {
  texto: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  showcase: PropTypes.bool
};

export default TitleCategory;
