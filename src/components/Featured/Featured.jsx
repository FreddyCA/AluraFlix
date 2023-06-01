import styled from "styled-components";
import PropTypes from "prop-types";
import TitleCategory from "../TitleCategory/TitleCategory";
import ButtonOpenAll from "../ButtonOpenAll/ButtonOpenAll";
import Carousel from "../Carousel/Carousel";

const FeaturedStyled = styled.div`
  max-width: 1024px;
  height: auto;
  margin: 3.2rem auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
`;

const FeaturedButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 100%;
  padding: 0 2rem;
`;

const Featured = ({ data }) => {
  return (
    <FeaturedStyled>
      <FeaturedButtons>
        <TitleCategory
          texto={data.label}
          backgroundColor={data.color}
          fontSize="var(--font-size-titleSmall)"
        ></TitleCategory>
        <ButtonOpenAll></ButtonOpenAll>
      </FeaturedButtons>

      <Carousel data={data} body></Carousel>
    </FeaturedStyled>
  );
};

Featured.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Featured;
